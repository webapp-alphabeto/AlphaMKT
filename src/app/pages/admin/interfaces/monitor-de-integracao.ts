import { Time } from '@angular/common';

export interface MonitorDeIntegracao {
    id: number;
    processo: string;
    estadoDescricao: string;
    mensagem: String;
    concluidoEm: Date;
    duracao: string;
}
