import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { validateCardValidity } from 'src/app/shared/custom-validators';

@Component({
  selector: 'app-form-pagamento',
  templateUrl: './form-pagamento.component.html',
  styleUrls: ['./form-pagamento.component.scss']
})
export class FormPagamentoComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() total: number;

  formPagamento: FormGroup;

  constructor(private fb: FormBuilder) {

    this.formPagamento = this.fb.group({
      nome: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      validade: new FormControl('', [Validators.required, validateCardValidity]),
      ccv: new FormControl('', Validators.required),
      parcelas: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  setFormCartao(tipo: string): void {
    if (tipo === 'cartao') {
      this.form.addControl('cartao', this.formPagamento);
    } else {
      this.form.removeControl('cartao');
    }
    console.log('form: ', this.form);
  }
}
