import { map, take } from 'rxjs/operators';
import { Add } from './../../actions/carrinho-action';
import { ClienteModel } from './../../models/cliente-model';
import { EnderecoModel } from './../../models/endereco-model';
import { OrderModel } from './../../models/order-model';
import { OrderStore, AddOrder } from './../../actions/order-action';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppStore } from './../../components/header/header.component';
import { Observable } from 'rxjs';
import { CarrinhoModel } from './../../models/carrinho-model';
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
  carrinho$: Observable<CarrinhoModel>;
  order$: Observable<OrderModel>;

  formDadosPessoais: FormGroup;
  formEndereco: FormGroup;
  formPagamento: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStore>,
    private orderStore: Store<OrderStore>,
    private router: Router) {

    this.carrinho$ = this.store.pipe(select('carrinho'));
    this.order$ = this.orderStore.pipe(select('order'));

  }

  ngOnInit(): void {
    this.criaForms();
    // this.order$.subscribe(orderSubs => {
    //   console.log(orderSubs);
    // });
  }

  criaForms(): void {
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
      this.createOrder();
      this.stepper.next();
    }
  }

  createOrder(): void {
    const enderecoValue = new EnderecoModel(this.formEndereco.value);
    const cliente = this.formDadosPessoais.value;
    const newCliente = new ClienteModel({
      nome: cliente.nome,
      sobrenome: cliente.sobrenome,
      nascimento: cliente.nascimento,
      email: cliente.email,
      celular: cliente.celular,
      sexo: cliente.sexo,
      endereco: enderecoValue
    });

    const pagamentoValue = {
      tipo: this.formPagamento.get('tipo').value,
    };

    if (this.formPagamento.get('tipo').value === 'cartao') {
      const cartao = this.formPagamento.get('cartao').value;
      Object.assign(pagamentoValue, cartao.parcelas);
    }

    let newCarrinho: CarrinhoModel;
    this.carrinho$.
      subscribe(cart => {
        newCarrinho = new CarrinhoModel(cart);
      });

    const order = new OrderModel(
      {
        cliente: newCliente,
        pagamento: pagamentoValue,
        carrinho: newCarrinho
      }
    );
    console.log('newCarrinho: ', newCarrinho);
    console.log('order: ', order);

    // this.orderStore.dispatch(AddOrder(order));
  }

}
