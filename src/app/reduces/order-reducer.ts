import { CarrinhoModel } from './../models/carrinho-model';
import { ActionOrderTypes } from './../actions/order-action';
import { ActionModel } from './../models/action-model';
import { OrderModel } from './../models/order-model';

export function orderReducer(state = new OrderModel(), action: ActionModel) {
    switch (action.type) {
        case ActionOrderTypes.Add:
            {
                const obj = new OrderModel(action.payload);
                obj.total = calculateTotal(obj.carrinho, obj.pagamento);
                // state = action.payload;
                // state.total = calculateTotal(state.carrinho, state.pagamento);
                state = Object.assign({}, obj);
                console.log('order: ', state);
                return state;
            }

        case ActionOrderTypes.Clear:
            {
                const obj = new OrderModel(state);
                obj.pagamento = null;
                state = Object.assign({}, obj);
                return state;
            }
        default:
            return state;
    }
}

function calculateTotal(carrinho: CarrinhoModel, pagamento: any): number {
    const total = carrinho.total;
    return pagamento.tipo === 'cartao' ? total : total * 0.9;
}
