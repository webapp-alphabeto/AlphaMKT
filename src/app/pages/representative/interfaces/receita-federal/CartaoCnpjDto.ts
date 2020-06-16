
export interface CartaoCnpjDto {
    numeroDeInscricao: string;
    dataDeAbertura: string;
    nomeEmpresarial: string;
    tituloDoEstabelecimentoNomeFantasia: string;
    porte: string;
    codigoEDescricaoDaAtividadeEconomicaPrincipal: string[];
    codigoEDescricaoDaAtividadeEconomicaSecundaria: string[];
    codigoEDescricaoDaNaturezaJuridica: string;
    logradouro: string;
    numero: string;
    complemento: string;
    cep: string;
    bairro: string;
    municipio: string;
    uf: string;
    enderecoEletronico: string;
    telefone: string;
    situacaoCadastral: string;
    dataDaSituacaoCadastral: string;
}
