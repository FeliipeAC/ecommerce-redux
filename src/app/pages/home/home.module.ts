import { ComponentsModule } from './../../components/components.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(APP_ROUTES),

    ComponentsModule,
  ]
})
export class HomeModule { }
