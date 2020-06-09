import { PosicaoDaFoto } from "../enums/posicao-da-foto.enum";

export interface IMyClientEdit {
  cliente: IClient;
  contatos: Contato[];
  fotoDosPontos: FotoDosPontos[];
  referenciasComerciais: ReferenciaComercial[];
}

export interface ReferenciaComercial {
  id: number;
  clienteId: number;
  cnpj: string;
  empresa: string;
  contato: string;
}

export interface FotoDosPontos {
  id: number;
  clienteId: number;
  posicaoDaFoto: PosicaoDaFoto;
  nomeEmStorage: string;
}

export interface Contato {
  id: number;
  clienteId: number;
  tipo: string;
  nome: string;
  telefone: string;
  email: string;
}

export interface IClient {
  cidadeId: string;
  protheusId: string;
  representanteId: number | null;
  representanteVendedorProtheusId: string;
  naturezaId: string;
  grupoDeVendaId: string;
  documento: string;
  razaoSocial: string;
  nomeFantasia: string;
  uF: string;
  codigoMunicipio: string;
  cidade: string;
  endereco: string;
  bairro: string;
  complemento: string;
  cep: string;
  ddd: string;
  telefone: string;
  email: string;
  inscricaoEstadual: string;
  pessoa: string;
  ultimaCompra: string | null;
  primeiraCompra: string | null;
  avaliacao: string;
  limiteDeCredito: number | null;
  sistema: number;
  estadoDaIntegracao: number;
  inscricaoMunicipal: string;
  contato: string;
  suframa: string;
  deletado: boolean;
  observacao: string;
}
