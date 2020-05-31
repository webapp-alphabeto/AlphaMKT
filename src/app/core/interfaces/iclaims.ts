import { NivelDeAcesso } from '../enums/nivel-de-acesso.enum';

export interface IClaims {
  nome: string;
  nivelDeAcesso: NivelDeAcesso;
  email: string;
  foto: string;
  id: number;
  representanteId: number;
}
