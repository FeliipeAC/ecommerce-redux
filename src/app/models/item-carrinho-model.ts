import { ProdutoModel } from './produto-model';

export class ItemCarrinhoModel {
    public produto: ProdutoModel;
    public quantidade: number;

    constructor(produto?: ProdutoModel) {
        if (produto) {
            this.produto = produto;
        } else {
            this.produto = null;
        }
        this.quantidade = 1;
    }
}
