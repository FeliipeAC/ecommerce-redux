import { TipoNotificacaoModel } from './../../models/tipo-notificacao-model';
import { NotificacaoService } from './../../services/notificacao.service';
import { ItemCarrinhoModel } from './../../models/item-carrinho-model';
import { Add } from './../../actions/carrinho-action';
import { CarrinhoModel } from './../../models/carrinho-model';
import { ProdutoModel } from './../../models/produto-model';
import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ProdutoModel;

  showInfo = false;

  constructor(
    private store: Store<CarrinhoModel>,
    private notificacaoService: NotificacaoService) { }

  ngOnInit(): void {
  }

  add(): void {
    const item = new ItemCarrinhoModel(this.product);
    this.store.dispatch(Add(item));

    const obj: TipoNotificacaoModel = {
      tipo: 'success',
      notificacao: {
        texto: 'Produto adicionado ao carrinho.',
        botao: {
          texto: 'Ver carrinho',
          link: '/carrinho'
        }
      }
    };

    this.notificacaoService.showNotificacao(obj);
  }

}
