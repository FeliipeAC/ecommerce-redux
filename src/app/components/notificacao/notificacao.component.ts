import { Router } from '@angular/router';
import { TipoNotificacaoModel } from './../../models/tipo-notificacao-model';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.scss']
})
export class NotificacaoComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: TipoNotificacaoModel,
    private snackBarRef: MatSnackBarRef<NotificacaoComponent>,
    private router: Router) { }

  ngOnInit(): void {
  }

  getIcon(): string {
    switch (this.data.tipo) {
      case 'success':
        return 'done';
      case 'warnig':
        return 'warning';
      case 'error':
        return 'clear';
      default:
        return '';
    }
  }

  action(): void {
    if (this.data.notificacao.botao) {
      this.router.navigate([this.data.notificacao.botao.link]);
    }

    this.snackBarRef.dismiss();
  }
}
