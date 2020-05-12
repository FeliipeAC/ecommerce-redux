import { FormControl } from '@angular/forms';
import * as moment from 'moment';

export function validateEmail(control: FormControl) {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    return emailRegex.test(control.value) ?
        null :
        { invalidEmail: true };
}

export function validateDate(control: FormControl) {
    const date = moment(control.value, 'DD/MM/YYYY');
    return date.isValid() ? null : { invalidDate: true };
}

export function validateCardValidity(control: FormControl) {
    const validade = moment(control.value, 'MM/YYYY');
    const data = moment();
    const valida = () => {
        if (validade.get('year') > data.get('year')) {
            return true;
        } else if (validade.get('year') === data.get('year')) {
            return validade.get('month') >= data.get('month');
        } else {
            return false;
        }
    };

    return valida() ? null : { invalidValidity: true };
}

export function validateCardNumber(control: FormControl) {
    const numCartao = control.value;
    let soma = 0;
    if (numCartao.length === 16) {

        for (let i = 0; i <= numCartao.length; i++) {
            const numString = (numCartao.substring(i, i + 1));

            if (i % 2 === 0) {
                if ((parseInt(numString, 10) * 2) > 9) {
                    soma += ((parseInt(numString, 10) * 2) - 9);
                } else {
                    soma += ((parseInt(numString, 10) * 2));
                }
            } else {
                soma += (parseInt(numString, 10) * 1);
            }
        }

    }

    return (soma % 10 === 0) ? null : { cardNumberInvalid: true };

    // if (soma % 10 === 0) {
    //     txtStatus.set_Text("Cartão valido!");
    // } else {
    //     txtStatus.set_Text("Cartão invalido!");
    // }
}
