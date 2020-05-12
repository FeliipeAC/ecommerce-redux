import { CepService } from './../../../../services/cep.service';
import { map, debounceTime, startWith } from 'rxjs/operators';
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

  constructor(private cepService: CepService) {
  }

  ngOnInit(): void {
  }

  buscaCep(): void {
    const enderecoForm = this.form.get('endereco');
    const cepValue = enderecoForm.get('cep').value;
    if (cepValue.length === 8) {
      this.procurandoEndereco = true;
      enderecoForm.get('cep').disable();
      this.cepService.getEnderecoByCep(cepValue)
        .then(endereco => {
          this.preencheFormEndereco(endereco);
          enderecoForm.get('cep').enable();
          this.procurandoEndereco = false;
          if (endereco.erro) {
            enderecoForm.get('cep').setErrors({ invalidCep: true });
          } else {
            enderecoForm.get('cep').setErrors(null);
          }
        })
        .catch(error => {
          console.log('error: ', error);
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

  getError(erro: any): string {
    if (erro.required) {
      return 'Campo obrigatório';
    } else if (erro.invalidEmail) {
      return 'E-mail inválido';
    } else if (erro.invalidDate) {
      return 'Data inválida';
    } else if (erro.invalidCep) {
      return 'CEP inválido';
    }
    return '';
  }
}
