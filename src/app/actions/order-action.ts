import { OrderModel } from './../models/order-model';
import { ClienteModel } from './../models/cliente-model';
export enum ActionOrderTypes {
    Add = 'Add',
    Clear = 'CLE',
}

export const Add = (order: OrderModel) => {
    return <Action>{ type: ActionOrderTypes.Add, payload: order };
}


export const Clear = () => {
    return <Action>{ type: ActionOrderTypes.Clear, payload: null };
}