import { ItemCarrinhoModel } from './../models/item-carrinho-model';
import { ProdutoModel } from './../models/produto-model';
import { ActionTypes } from './../actions/carrinho-action';
import { ActionModel } from './../models/action-model';
import { CarrinhoModel } from './../models/carrinho-model';

export function carrinhoReducer(state = new CarrinhoModel(), action: ActionModel) {
    switch (action.type) {
        case ActionTypes.Add:
            {
                if (state.items.length === 0) {
                    let newItem = new ItemCarrinhoModel();
                    const obj = new CarrinhoModel();
                    newItem = action.payload;
                    obj.items.push(newItem);
                    obj.total = calculateTotal(obj.items);
                    state = Object.assign({}, obj);
                } else {
                    const obj = new CarrinhoModel();
                    let exist = false;

                    state.items.forEach(item => {
                        if (item.produto === action.payload.produto) {
                            const itemUpdate = new ItemCarrinhoModel(item.produto);
                            itemUpdate.quantidade += 1;
                            obj.items.push(itemUpdate);
                            exist = true;
                        } else {
                            obj.items.push(item);
                        }

                    });
                    if (!exist) {
                        obj.items.push(action.payload);
                    }
                    obj.total = calculateTotal(obj.items);
                    state = Object.assign({}, obj);
                }


                // state.produtos.push(action.payload);
                // state.produtos = state.produtos.concat(action.payload);
                // state.total = calculateTotal(state.produtos);


                console.log(state);
                return state;
            }

        case ActionTypes.Remove:
            {
                const obj = new CarrinhoModel();
                state.items.forEach(item => {
                    if (item !== action.payload) {
                        obj.items.push(item);
                    }
                });
                // const index = obj.items.indexOf(action.payload);
                // obj.items.splice(index, 1);
                obj.total = calculateTotal(obj.items);

                state = Object.assign({}, obj);
                return state;
            }

        case ActionTypes.Clear:
            {
                state = new CarrinhoModel();
                state.total = calculateTotal(state.items);

                return state;
            }

        default:
            return state;
    }


}

function calculateTotal(items: { produto: ProdutoModel; quantidade: number }[]): number {
    let total = 0;
    items.forEach(item => {
        total += item.quantidade * item.produto.preco;
    });
    return total;
}
