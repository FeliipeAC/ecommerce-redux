import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ComponentsModule } from './../../components/components.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComponent } from './carrinho.component';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: CarrinhoComponent
  },
];


@NgModule({
  declarations: [CarrinhoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(APP_ROUTES),

    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,

    ComponentsModule,
  ]
})
export class CarrinhoModule { }
