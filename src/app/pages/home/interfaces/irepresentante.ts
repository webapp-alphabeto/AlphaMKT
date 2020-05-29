export interface IRepresentante {
    id: number;
    fornecedorProtheusId: string;
    vendedorProtheusId: string;
    documento: string;
    razaoSocial: string;
    nomeFantasia: string;
    uf: string;
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
    inscricaoMunicipal: string;
    deletado: boolean;
    cidadeId: string;
}
