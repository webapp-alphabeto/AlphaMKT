import { Contato } from "./contato";
import { IReferenciaComercial } from "./ireferencia-comercial";
import { FotosDoPonto } from "./fotos-do-ponto";

export interface IRepresentanteClienteEdit {
  cidadeId: number; //ok
  cidade: string; //ok
  representanteId: number;
  documento: string; // ok
  razaoSocial: string; // ok
  nomeFantasia: string; // ok
  endereco: string; // ok
  bairro: string; // ok
  complemento: string; // ok
  cep: string; // ok
  ddd: string; // ok
  telefone: string; //ok
  email: string; // ok
  inscricaoEstadual: string; //ok
  pessoa: string; // ok
  avaliacao: string; //ok
  limiteDeCredito: number; //ok
  inscricaoMunicipal: string; //ok
  contato: string; //ok
  suframa: string; //ok
  contatos: Contato[];
  referenciasComerciais: IReferenciaComercial[];
  fotos: FotosDoPonto[];
  observacao: string;
}
