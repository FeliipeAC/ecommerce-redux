import { NgxMaskModule } from 'ngx-mask';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormDadosPessoaisComponent } from './components/form-dados-pessoais/form-dados-pessoais.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormPagementoComponent } from './components/form-pagemento/form-pagemento.component';
import {MatRadioModule} from '@angular/material/radio';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: CheckoutComponent
  },
];

@NgModule({
  declarations: [CheckoutComponent, FormDadosPessoaisComponent, FormPagementoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(APP_ROUTES),
    NgxMaskModule.forRoot(),

    MatStepperModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatRadioModule,
  ]
})
export class CheckoutModule { }
