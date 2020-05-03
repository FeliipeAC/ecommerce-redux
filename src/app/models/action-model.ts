import { ItemCarrinhoModel } from './item-carrinho-model';
import { Action } from '@ngrx/store';

export class ActionModel implements Action {
    type: string;
    payload: ItemCarrinhoModel;
}
