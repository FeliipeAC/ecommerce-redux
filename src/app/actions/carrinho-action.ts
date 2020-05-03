import { ItemCarrinhoModel } from './../models/item-carrinho-model';
import { ProdutoModel } from './../models/produto-model';
import { Action } from '@ngrx/store';

export enum ActionTypes {
    Add = 'ADD',
    Remove = 'REM',
    Clear = 'CLE',
}

export const Add = (item: ItemCarrinhoModel) => {
    return <Action>{ type: ActionTypes.Add, payload: item };
}

export const Remove = (item: ItemCarrinhoModel) => {
    return <Action>{ type: ActionTypes.Remove, payload: item };
}

export const Clear = () => {
    return <Action>{ type: ActionTypes.Clear, payload: null };
}