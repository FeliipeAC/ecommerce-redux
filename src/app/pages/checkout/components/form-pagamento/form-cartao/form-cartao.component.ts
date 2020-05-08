import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-cartao',
  templateUrl: './form-cartao.component.html',
  styleUrls: ['./form-cartao.component.scss']
})
export class FormCartaoComponent implements OnInit {

  @Input() form;

  showBack = false;

  constructor() { }

  ngOnInit(): void {
  }

  isInvalid(campo: string): boolean {
    return this.form.get(campo).invalid && this.form.get(campo).touched;
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
