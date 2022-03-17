import { IEntityIdentity } from './IEntityIdentity';

export interface IComplementaryProductInformation extends IEntityIdentity {
    reference: string;
    friendlySize: string;
    feature: string;
    friendlyDescription: string;
    keyWords: string;
    secondDescription: string;
}
