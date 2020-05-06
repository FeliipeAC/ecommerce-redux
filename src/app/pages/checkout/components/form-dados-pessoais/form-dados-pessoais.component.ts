import { HttpClient } from '@angular/common/http';
import { map, debounceTime } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-dados-pessoais',
  templateUrl: './form-dados-pessoais.component.html',
  styleUrls: ['./form-dados-pessoais.component.scss']
})
export class FormDadosPessoaisComponent implements OnInit {

  @Input() form: FormGroup;

  procurandoEndereco = false;

  constructor(
    private http: HttpClient) {
  }

  ngOnInit(): void {
    const enderecoForm = this.form.get('endereco');
    enderecoForm.get('cep').valueChanges.pipe(
      debounceTime(300),
      map((value: string) => {
        if (value.length === 8) {
          // this.procurandoEndereco = true;
          // enderecoForm.get('cep').disable();
          // this.http.get(`https://viacep.com.br/ws/${value}/json/unicode/`).toPromise()
          //   .then(endereco => {
          //     console.log('viaCep: ', endereco);
          //     this.preencheFormEndereco(endereco);
          //     enderecoForm.get('cep').enable();
          //     this.procurandoEndereco = false;
          //   });
        } else {
          // enderecoForm.get('rua').reset();
          // enderecoForm.get('bairro').reset();
          // enderecoForm.get('cidade').reset();
          // enderecoForm.get('estado').reset();
        }
      })
    ).subscribe();
  }

  buscaCep(cep: string): void {
    const enderecoForm = this.form.get('endereco');

    if (cep.length === 8) {
      this.procurandoEndereco = true;
      enderecoForm.get('cep').disable();
      this.http.get(`https://viacep.com.br/ws/${cep}/json/unicode/`).toPromise()
        .then(endereco => {
          console.log('viaCep: ', endereco);
          this.preencheFormEndereco(endereco);
          enderecoForm.get('cep').enable();
          this.procurandoEndereco = false;
        });
    } else {
      enderecoForm.get('rua').reset();
      enderecoForm.get('bairro').reset();
      enderecoForm.get('cidade').reset();
      enderecoForm.get('estado').reset();
    }
  }

  preencheFormEndereco(endereco): void {
    const enderecoForm = this.form.get('endereco');
    enderecoForm.get('rua').setValue(endereco.logradouro);
    enderecoForm.get('bairro').setValue(endereco.bairro);
    enderecoForm.get('cidade').setValue(endereco.localidade);
    enderecoForm.get('estado').setValue(endereco.uf);
  }

  isInvalid(campo: string): boolean {
    return this.form.get(campo).invalid && this.form.get(campo).touched;
  }

  isInvalidEndereco(campo: string): boolean {
    const endereco = this.form.get('endereco');
    return endereco.get(campo).invalid && endereco.get(campo).touched;
  }
}
