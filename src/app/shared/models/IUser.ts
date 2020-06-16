import { AccessLevel } from 'src/app/core/enums/access-level.enum';
import { IEntityIdentity } from './IEntityIdentity';

export interface IUser extends IEntityIdentity {
    name: string;
    email: string;
    password: string;
    photoStorage: string;
    accessLevel: AccessLevel;
    active: boolean;
    representativeId: number | null;
}
