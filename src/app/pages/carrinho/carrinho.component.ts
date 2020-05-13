import { DialogConfirmacaoComponent } from './../../components/dialog-confirmacao/dialog-confirmacao.component';
import { ItemCarrinhoModel } from './../../models/item-carrinho-model';
import { Clear, Remove } from './../../actions/carrinho-action';
import { Store, select } from '@ngrx/store';
import { AppStore } from './../../components/header/header.component';
import { Observable } from 'rxjs';
import { CarrinhoModel } from './../../models/carrinho-model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {

  data: CarrinhoModel[];

  displayedColumns: string[] = ['produto', 'preco', 'quantidade', 'subtotal', 'acoes'];

  carrinho$: Observable<CarrinhoModel>;

  constructor(
    private store: Store<AppStore>,
    private dialog: MatDialog) {
    this.carrinho$ = this.store.pipe(select('carrinho'));
  }

  ngOnInit(): void {
  }

  removerProduto(element: ItemCarrinhoModel): void {
    this.dialog.open(DialogConfirmacaoComponent, {
      width: '380px',
      data: {
        titulo: 'Excluir produto',
        texto: 'Deseja realmente excluir o item <b>' + element.produto.titulo + '</b> do carrinho?',
        buttonText: {
          cancelar: 'Manter',
          confirmar: 'Excluir'
        }
      }
    })
      .beforeClosed()
      .subscribe(res => {
        if (res) {
          this.store.dispatch(Remove(element));
        }
      });
  }

  clear(): void {
    this.dialog.open(DialogConfirmacaoComponent, {
      width: '380px',
      data: {
        titulo: 'Esvaziar carrinho',
        texto: 'Deseja realmente <b>excluir todos os items</b> do carrinho ?',
        buttonText: {
          cancelar: 'Manter',
          confirmar: 'Esvaziar carrinho'
        }
      }
    })
      .beforeClosed()
      .subscribe(res => {
        if (res) {
          this.store.dispatch(Clear());
        }
      });
  }
}
