import { CarrinhoModel } from './carrinho-model';
import { ClienteModel } from './cliente-model';

export class OrderModel {
    carrinho: CarrinhoModel;
    pagamento: any;
    cliente: ClienteModel;

    constructor(obj?) {
        if (obj) {
            this.carrinho = obj.carrinho;
            this.pagamento = obj.pagamento;
            this.cliente = obj.cliente;
        } else {
            this.carrinho = null;
            this.pagamento = null;
            this.cliente = null;
        }
    }
}
