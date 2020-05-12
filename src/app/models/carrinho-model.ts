import { ItemCarrinhoModel } from './item-carrinho-model';
import { ProdutoModel } from './produto-model';

export class CarrinhoModel {
    public total: number;
    public items: ItemCarrinhoModel[];

    constructor(obj?) {
        if (obj) {
            this.total = obj.total;
            this.items = obj.items;
        } else {
            this.total = 0;
            this.items = [];
        }
    }
}
