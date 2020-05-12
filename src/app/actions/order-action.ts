import { Action } from '@ngrx/store';
import { OrderModel } from './../models/order-model';
import { ClienteModel } from './../models/cliente-model';
export enum ActionOrderTypes {
    Add = 'ADDORDER',
    Clear = 'CLEORDER',
}

export interface OrderStore { order: OrderModel; }

export const AddOrder = (order: OrderModel) => {
    return <Action>{ type: ActionOrderTypes.Add, payload: order };
};

export const Clear = () => {
    return <Action>{ type: ActionOrderTypes.Clear, payload: null };
};
