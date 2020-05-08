import { Component, OnInit, Input } from '@angular/core';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.scss']
})
export class CartaoComponent implements OnInit {

  @Input() dados: {
    nome: string;
    numero: string;
    ccv: string;
    validade: string;
  };

  @Input() show: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
