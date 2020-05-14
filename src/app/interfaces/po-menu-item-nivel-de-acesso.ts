import { PoMenuItem } from '@po-ui/ng-components';
import { NivelDeAcesso } from '../autenticacao/nivel-de-acesso.enum';

export interface PoMenuItemNivelDeAcesso extends PoMenuItem {
    nivelDeAcesso: NivelDeAcesso[];
}
