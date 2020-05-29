import { PoMenuItem } from '@po-ui/ng-components';
import { NivelDeAcesso } from 'src/app/core/enums/nivel-de-acesso.enum';

export interface PoMenuItemNivelDeAcesso extends PoMenuItem {
    nivelDeAcesso: NivelDeAcesso[];
}
