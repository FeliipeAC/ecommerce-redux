import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { validateEmail, validateDate } from 'src/app/shared/custom-validators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  @ViewChild('stepper') stepper: MatStepper;

  formDadosPessoais: FormGroup;
  formEndereco: FormGroup;
  formPagamento: FormGroup;

  constructor(private fb: FormBuilder) {

    this.formEndereco = this.fb.group({
      cep: new FormControl('', Validators.required),
      rua: new FormControl('', Validators.required),
      bairro: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required),
      numero: new FormControl('', [Validators.required, Validators.min(0)]),
      complemento: new FormControl(''),
    });

    this.formDadosPessoais = this.fb.group({
      nome: new FormControl('', Validators.required),
      sobrenome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, validateEmail]),
      celular: new FormControl('', Validators.required),
      nascimento: new FormControl('', [Validators.required, validateDate]),
      sexo: new FormControl('', Validators.required),
      endereco: this.formEndereco
    });

    this.formPagamento = this.fb.group({
      tipo: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
  }

  avancar(): void {
    console.log('stepper: ', this.stepper);
    switch (this.stepper.selected.state) {
      case 'dados':
        this.checkFormDados();
        break;

      case 'pagamento':
        this.checkFormPagamento();
        break;

      default:
        break;
    }
    // this.stepper.next();
  }

  checkFormDados(): void {
    Object.keys(this.formDadosPessoais.controls).forEach(campo => {
      this.formDadosPessoais.get(campo).markAsTouched();
    });

    Object.keys(this.formEndereco.controls).forEach(campo => {
      this.formEndereco.get(campo).markAsTouched();
    });

    if (this.formDadosPessoais.valid) {
      this.stepper.next();
    }
  }

  checkFormPagamento(): void {
    const tipo = this.formPagamento.get('tipo');
    tipo.markAsTouched();

    if (this.formPagamento.invalid) {
      if (tipo.value === 'cartao') {
        const cartaoForm: any = this.formPagamento.get('cartao');
        Object.keys(cartaoForm.controls).forEach(campo => {
          cartaoForm.get(campo).markAsTouched();
        });
      }
      return;
    } else {
      this.stepper.next();
    }
  }

}
