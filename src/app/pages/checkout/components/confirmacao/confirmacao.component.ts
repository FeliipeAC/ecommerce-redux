import { OrderModel } from './../../../../models/order-model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { OrderStore } from './../../../../actions/order-action';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.scss']
})
export class ConfirmacaoComponent implements OnInit {

  order$: Observable<OrderModel>;

  constructor(private orderStore: Store<OrderStore>, ) {
    this.order$ = this.orderStore.pipe(select('order'));

  }

  ngOnInit(): void {
    this.order$.subscribe(order => {
      console.log('confirmação: ', order);
    });
  }

}
