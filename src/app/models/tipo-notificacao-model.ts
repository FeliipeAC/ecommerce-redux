import { NotificacaoModel } from './notificacao-model';

export class TipoNotificacaoModel {
    tipo: 'success' | 'warnig' | 'error';
    notificacao: NotificacaoModel;
}
