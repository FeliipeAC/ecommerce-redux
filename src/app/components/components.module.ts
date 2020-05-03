import { RouterModule } from '@angular/router';
import { ProdutosService } from './../services/produtos.service';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StoreListComponent } from './store-list/store-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { DialogConfirmacaoComponent } from './dialog-confirmacao/dialog-confirmacao.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NotificacaoComponent } from './notificacao/notificacao.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    HeaderComponent,
    StoreListComponent,
    ProductCardComponent,
    DialogConfirmacaoComponent,
    NotificacaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatDialogModule,
    MatSnackBarModule,

  ],
  exports: [
    HeaderComponent,
    StoreListComponent,
    ProductCardComponent,
    DialogConfirmacaoComponent
  ],
  entryComponents: [
    DialogConfirmacaoComponent
  ],
  providers: [
    ProdutosService
  ]
})
export class ComponentsModule { }
