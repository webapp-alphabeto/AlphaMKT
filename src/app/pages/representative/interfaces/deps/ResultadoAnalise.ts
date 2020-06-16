import { Metrica } from './Metrica';

export interface ResultadoAnalise {
    politica: string;
    classificacao: string;
    dataValidadeAnalise: string;
    limiteSugerido: number;
    limiteAdotado: number;
    risco: string;
    limiteTomado: number;
    limiteDisponivel: number;
    percentualPositivo: number;
    percentualNegativo: number;
    percentualAtingido: number;
    quantidadeTitulosVencidos: number;
    dataDeVencimentoDoTituloMaisAntigo: string;
    valorTotalTitulosVencidos: number;
    metricasPositivas: Metrica[];
    metricasNegativas: Metrica[];
}


