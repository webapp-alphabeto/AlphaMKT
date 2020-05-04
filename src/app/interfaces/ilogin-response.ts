import { PoToolbarProfile } from '@po-ui/ng-components';

export interface ILoginResponse {
    id: number;
    profile: PoToolbarProfile;
    token: string;
    nivelDeAcesso: string;
}
