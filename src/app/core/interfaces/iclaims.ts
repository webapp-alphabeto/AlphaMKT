import { AccessLevel } from '../enums/access-level.enum';

export interface IClaims {
  name: string;
  accessLevel: AccessLevel;
  email: string;
  photo: string;
  id: number;
  representativeId: number;
}
