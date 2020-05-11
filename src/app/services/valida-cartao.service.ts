import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidaCartaoService {

  cards = {
    visa: {
      regex: /^4[0-9]{12}(?:[0-9]{3})/,
      logo: '/assets/images/logos/visa-logo.png'
    },
    mastercard: {
      regex: /^5[1-5][0-9]{14}/,
      logo: '/assets/images/logos/mastercard-logo.png'
    },
    diners: {
      regex: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
      logo: ''
    },
    amex: {
      regex: /^3[47][0-9]{13}/,
      logo: ''
    },
    discover: {
      regex: /^6(?:011|5[0-9]{2})[0-9]{12}/,
      logo: ''
    },
    hipercard: {
      regex: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
      logo: '/assets/images/logos/hipercard-logo.png'
    },
    elo: {
      regex: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
      logo: '/assets/images/logos/elo-logo.png'
    },
    jcb: {
      regex: /^(?:2131|1800|35\d{3})\d{11}/,
      logo: ''
    },
    aura: {
      regex: /^(5078\d{2})(\d{2})(\d{11})$/,
      logo: ''
    }
  };

  constructor() { }

  validaNumero(cardNumber: string): string | null {
    const numero = cardNumber.replace(/( )+/g, '');
    for (const flag in this.cards) {
      if (this.cards[flag].regex.test(numero)) {
        return this.cards[flag].logo;
      }
    }
    return null;

  }
}
