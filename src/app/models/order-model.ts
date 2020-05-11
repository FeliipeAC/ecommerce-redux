import { ClienteModel } from './cliente-model';
import { ItemCarrinhoModel } from './item-carrinho-model';
export class OrderModel {
    items: ItemCarrinhoModel[];
    total: number;
    pagamento: any;
    cliente: ClienteModel;
}