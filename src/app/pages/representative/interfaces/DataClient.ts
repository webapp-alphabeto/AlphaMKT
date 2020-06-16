import { IClient } from 'src/app/shared/models/IClient';
import { CartaoCnpjDto } from './receita-federal/CartaoCnpjDto';
import { AnaliseClienteDto } from './deps/AnaliseClienteDto';
import { ConsultaDadosClienteV2Dto } from './deps/ConsultaDadosClienteV2Dto';

export interface DataClient {
    client: IClient;
    cnpjCard: CartaoCnpjDto;
    customerAnalysis: AnaliseClienteDto;
    queryData: ConsultaDadosClienteV2Dto;
}


