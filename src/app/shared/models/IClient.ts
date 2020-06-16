import { IEntityIdentity } from './IEntityIdentity';
import { ICity } from './ICity';
import { Systems } from '../enums/system.enums';
import { IntegrationStatus } from 'src/app/pages/admin/enums/integration-status.enum';
import { IRepresentative } from './IRepresentative';
import { INature } from './INature';
import { ISalesGroup } from './ISalesGroup';

export interface IClient extends IEntityIdentity {
    cityId: string;
    county: ICity;
    protheusId: string;
    representativeId: number | null;
    representative: IRepresentative;
    salesmanRepresentativeProtheusId: string;
    natureId: string;
    nature: INature;
    salesGroupId: string;
    salesGroup: ISalesGroup;
    document: string;
    companyName: string;
    fantasyName: string;
    uf: string;
    countyCode: string;
    city: string;
    address: string;
    neighborhood: string;
    complement: string;
    cep: string;
    ddd: string;
    phone: string;
    email: string;
    stateRegistration: string;
    person: string;
    lastPurchase: string | null;
    firstPurchase: string | null;
    rating: string;
    creditLimit: number | null;
    system: Systems;
    integrationStatus: IntegrationStatus;
    municipalRegistration: string;
    contact: string;
    suframa: string;
    deleted: boolean;
    note: string;
}


