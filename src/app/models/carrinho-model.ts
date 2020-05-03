import { ItemCarrinhoModel } from './item-carrinho-model';
import { ProdutoModel } from './produto-model';

export class CarrinhoModel {
    public total: number;
    public items: ItemCarrinhoModel[];

    constructor() {
        this.total = 0;
        this.items = [];
    }
}
