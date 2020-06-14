import { PoMenuItem } from '@po-ui/ng-components';
import { AccessLevel } from 'src/app/core/enums/access-level.enum';

export interface PoMenuItemNivelDeAcesso extends PoMenuItem {
    nivelDeAcesso: AccessLevel[];
}
