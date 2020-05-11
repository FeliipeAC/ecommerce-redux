import { ValidaCartaoService } from './../../../../../services/valida-cartao.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-cartao',
  templateUrl: './form-cartao.component.html',
  styleUrls: ['./form-cartao.component.scss']
})
export class FormCartaoComponent implements OnInit {

  @Input() form;

  @Input() total: number;

  logo: string;

  showBack = false;

  maxParcelas = 10;

  parcelas: { numero: number; valor: number }[] = [];

  constructor(private cartaoService: ValidaCartaoService) { }

  ngOnInit(): void {
    this.getListParcelas();
  }

  getListParcelas(): void {

    for (let i = 1; i <= this.maxParcelas; i++) {
      this.parcelas.push(
        {
          numero: i,
          valor: this.total / i
        }
      );
    }
    this.form.get('parcelas').setValue(this.parcelas[0]);

  }

  verificaNumero(numero: string): void {
    if (numero.length === 19) {
      this.logo = this.cartaoService.validaNumero(numero.trim());
    } else {
      this.logo = null;
    }
  }

  isInvalid(campo: string): boolean {
    return this.form.get(campo).invalid && this.form.get(campo).touched;
  }

  getError(erro: any): string {
    if (erro.required) {
      return 'Campo obrigatório';
    } else if (erro.invalidEmail) {
      return 'E-mail inválido';
    } else if (erro.invalidValidity) {
      return 'Data inválida';
    } else if (erro.cardNumberInvalid) {
      return 'Número de cartão inválido';
    }
    return '';
  }
}
