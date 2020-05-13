import { CarrinhoModel } from './carrinho-model';
import { ClienteModel } from './cliente-model';

export class OrderModel {
    carrinho: CarrinhoModel;
    pagamento: any;
    cliente: ClienteModel;
    total: number;

    constructor(obj?) {
        if (obj) {
            this.carrinho = obj.carrinho;
            this.pagamento = obj.pagamento;
            this.cliente = obj.cliente;
            this.total = obj.total;
        } else {
            this.carrinho = null;
            this.pagamento = null;
            this.cliente = null;
            this.total = 0;
        }
    }
}
