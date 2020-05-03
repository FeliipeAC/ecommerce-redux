import { NotificacaoComponent } from './../components/notificacao/notificacao.component';
import { TipoNotificacaoModel } from './../models/tipo-notificacao-model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(private snackBar: MatSnackBar) { }

  showNotificacao(obj: TipoNotificacaoModel): void {
    this.snackBar.openFromComponent(NotificacaoComponent, {
      data: obj,
      panelClass: obj.tipo,
      verticalPosition: 'top',
      duration: 5000
    });
  }
}
