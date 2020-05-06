import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-pagemento',
  templateUrl: './form-pagemento.component.html',
  styleUrls: ['./form-pagemento.component.scss']
})
export class FormPagementoComponent implements OnInit {

  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
