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
