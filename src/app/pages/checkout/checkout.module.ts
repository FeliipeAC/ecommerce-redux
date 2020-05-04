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

const APP_ROUTES: Routes = [
  {
    path: '',
    component: CheckoutComponent
  },
];

@NgModule({
  declarations: [CheckoutComponent, FormDadosPessoaisComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(APP_ROUTES),

    MatStepperModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ]
})
export class CheckoutModule { }
