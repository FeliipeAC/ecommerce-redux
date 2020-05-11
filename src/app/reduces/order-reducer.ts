import { ActionOrderTypes } from './../actions/order-action';
import { ActionTypes } from './../actions/carrinho-action';
import { ActionModel } from './../models/action-model';
import { OrderModel } from './../models/order-model';

export function orderReducer(state = new OrderModel(), action: ActionModel) {
    switch (action.type) {
        case ActionOrderTypes.Add:
            {
                state = action.payload;
                return state;
            }

        case ActionOrderTypes.Clear:
            {
                state = null;
                return state;
            }
        default:
            return state;
    }
}
