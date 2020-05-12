import { ActionOrderTypes } from './../actions/order-action';
import { ActionModel } from './../models/action-model';
import { OrderModel } from './../models/order-model';

export function orderReducer(state = new OrderModel(), action: ActionModel) {
    switch (action.type) {
        case ActionOrderTypes.Add:
            {
                state = action.payload;
                console.log('order: ', state);
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
