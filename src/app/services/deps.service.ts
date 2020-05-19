import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SCREEN_LOCK } from 'src/environments/environment';

const API_DEPS_INTERNO = "http://10.10.2.10:74/api/";
const API_DEPS_EXTERNO = "http://10.10.2.10:74/api/";
@Injectable({
  providedIn: "root",
})
export class DepsService {
  constructor(private httpClient: HttpClient) {}

  analiseCliente(cnpj: string): Observable<any> {
    let body = {
      tipo: "J",
      documento: cnpj,
      nomeOrigem: "ALPHABETO",
      codigoSistemaGestaoInformacaoCadastral: "ALPHABETO",
    };
    const url = `${API_DEPS_INTERNO}analise/cliente`;
    return this.httpClient.post<any>(url, body, { headers: SCREEN_LOCK });
  }

  consultaDados(cnpj: string): Observable<any> {
    let body = {
      tipo: "J",
      documento: cnpj,
      nomeOrigem: "ALPHABETO",
      opcoesDadosExtracao: {
        dadosCadastrais: true,
        resultadoAnalise: true,
        limiteAdotado: true,
        limiteTomado: true,
        endereco: true,
        bloqueio: true,
        questionario: true,
        participacaoEmpresas: true,
        quadroSocietario: true,
        metricas: true,
        percentuais: true,
        informacaoCadastral: true,
        grupo: true,
        ultimasConsultas: 0,
        detalhamentoMetricas: true
      }
    };
    const url = `${API_DEPS_INTERNO}consultadados/clientes/v2`;
    return this.httpClient.post<any>(url, body, { headers: SCREEN_LOCK });
  }
}
