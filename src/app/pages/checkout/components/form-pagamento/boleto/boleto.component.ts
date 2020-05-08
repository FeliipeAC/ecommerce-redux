import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boleto',
  templateUrl: './boleto.component.html',
  styleUrls: ['./boleto.component.scss']
})
export class BoletoComponent implements OnInit {

  @Input() valor: number;

  constructor() { }

  ngOnInit(): void {
  }

}
