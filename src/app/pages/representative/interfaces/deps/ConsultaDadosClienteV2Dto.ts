import { DadosCadastrais } from './DadosCadastrais';
import { Enderecos } from './Enderecos';
import { ResultadoAnalise } from './ResultadoAnalise';
import { Bloqueios } from './Bloqueios';
import { Questionario } from './Questionario';
import { InformacaoCadastral } from './InformacaoCadastral';
import { QuadroSocietario } from './QuadroSocietario';
import { ParticipacaoEmpresa } from './ParticipacaoEmpresa';
import { Grupo } from './Grupo';

export interface ConsultaDadosClienteV2Dto {
    dadosCadastrais: DadosCadastrais;
    enderecos: Enderecos;
    resultadoAnalise: ResultadoAnalise;
    bloqueios: Bloqueios;
    questionario: Questionario;
    informacaoCadastral: InformacaoCadastral;
    quadroSocietario: QuadroSocietario;
    participacaoEmpresa: ParticipacaoEmpresa;
    grupo: Grupo;
}


