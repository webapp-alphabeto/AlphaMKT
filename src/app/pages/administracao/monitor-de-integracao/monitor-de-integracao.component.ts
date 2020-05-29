import { Component, OnInit, OnDestroy } from "@angular/core";
import { environment } from "src/environments/environment";
import { PoBreadcrumb, PoTableColumn } from "@po-ui/ng-components";
import { MonitorDeIntegracao } from "src/app/pages/administracao/interfaces/monitor-de-integracao";
import { MonitorDeIntegracaoService } from "src/app/pages/administracao/services/monitor-de-integracao.service";

@Component({
  selector: "app-monitor-de-integracao",
  templateUrl: "./monitor-de-integracao.component.html",
  styleUrls: ["./monitor-de-integracao.component.css"],
})
export class MonitorDeIntegracaoComponent implements OnInit, OnDestroy {
  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: "Home", link: "/" }, { label: "Monitor de integração" }],
  };

  columns: Array<PoTableColumn> = [
    { property: "processo", label: "Processo" },
    { property: "mensagem", label: "Mensagem" },
    {
      property: "estadoDescricao",
      type: "label",
      width: "5%",
      label: "Estado",
      labels: [
        { value: "Concluído", color: "color-11", label: "Concluído" },
        { value: "Não Concluído", color: "color-07", label: "Não Concluído" },
        { value: "Em Andamento", color: "color-08", label: "Em Andamento" },
        { value: "Bloqueado", color: "color-07", label: "Bloqueado" },
      ],
    },
    { property: "concluidoEm", label: "Concluído em", type: "dateTime" },
    { property: "duracao", label: "Duração" },
  ];

  items = [] as MonitorDeIntegracao[];

  serviceApi = `${environment.serviceApi}integracao/monitor-de-integracao`;

  tempoParaProximaRequisicao = 30;
  timeOutRequest: any;
  timeOutContagem: any;

  constructor(private monitorDeIntegracaoService: MonitorDeIntegracaoService) {}

  ngOnInit(): void {
    this.obterMonitorDeIntegracao();

    this.timeOutContagem = setInterval(() => {
      if (this.tempoParaProximaRequisicao == 0)
        this.tempoParaProximaRequisicao = 30;

      this.tempoParaProximaRequisicao--;
    }, 1000);

    this.timeOutRequest = setInterval(() => {
      this.obterMonitorDeIntegracao();
    }, 30000);
  }

  obterMonitorDeIntegracao() {
    this.monitorDeIntegracaoService
      .get()
      .subscribe((x: MonitorDeIntegracao[]) => {
        this.items = x;
      });
  }

  ngOnDestroy(): void {
    clearInterval(this.timeOutRequest);
    clearInterval(this.timeOutContagem);
  }
}
