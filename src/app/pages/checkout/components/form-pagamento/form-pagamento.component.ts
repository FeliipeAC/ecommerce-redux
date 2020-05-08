import { CarrinhoModel } from '../../../../models/carrinho-model';
import { Observable } from 'rxjs';
import { AppStore } from '../../../../components/header/header.component';
import { Store, select } from '@ngrx/store';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-pagamento',
  templateUrl: './form-pagamento.component.html',
  styleUrls: ['./form-pagamento.component.scss']
})
export class FormPagamentoComponent implements OnInit {

  @Input() form: FormGroup;
  carrinho$: Observable<CarrinhoModel>;

  constructor(private store: Store<AppStore>) {
    this.carrinho$ = this.store.pipe(select('carrinho'));
  }

  ngOnInit(): void {
  }

}
