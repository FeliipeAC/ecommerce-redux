import { CarrinhoModel } from './../../models/carrinho-model';
import { ItemCarrinhoModel } from './../../models/item-carrinho-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-items-cart',
  templateUrl: './table-items-cart.component.html',
  styleUrls: ['./table-items-cart.component.scss']
})
export class TableItemsCartComponent implements OnInit {

  displayedColumns: string[] = ['produto', 'preco', 'quantidade', 'subtotal', 'acoes'];

  @Input() data: CarrinhoModel;

  @Output() eventRemoverProduto = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removerProduto(item: ItemCarrinhoModel): void {
    this.eventRemoverProduto.emit(item);
  }

}
