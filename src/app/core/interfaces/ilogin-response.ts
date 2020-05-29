import { PoToolbarProfile } from '@po-ui/ng-components';
import { NivelDeAcesso } from '../enums/nivel-de-acesso.enum';

export interface ILoginResponse {
    id: number;
    profile: PoToolbarProfile;
    token: string;
    nivelDeAcesso: NivelDeAcesso;
}
