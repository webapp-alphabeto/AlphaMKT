import { Component, OnInit, OnDestroy } from "@angular/core";
import { environment } from "src/environments/environment";
import { PoBreadcrumb, PoTableColumn } from "@po-ui/ng-components";
import { IntegrationMonitor } from "src/app/pages/admin/interfaces/integration-monitor";
import { MonitorDeIntegracaoService } from "src/app/pages/admin/services/monitor-de-integracao.service";

@Component({
  selector: "app-integration-monitor",
  templateUrl: "./integration-monitor.component.html",
  styleUrls: ["./integration-monitor.component.css"],
})
export class IntegrationMonitorComponent implements OnInit, OnDestroy {
  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: "Home", link: "/" }, { label: "Monitor de integração" }],
  };

  columns: Array<PoTableColumn> = [
    { property: "process", label: "Processo" },
    { property: "message", label: "Mensagem" },
    {
      property: "stateDescription",
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
    { property: "completedAt", label: "Concluído em", type: "dateTime" },
    { property: "duration", label: "Duração" },
  ];

  items = [] as IntegrationMonitor[];

  serviceApi = `${environment.serviceApi}integracao/monitor-de-integracao`;

  nextRequest = 30;
  timeOutRequest: any;
  timeOutCount: any;

  constructor(private integrationMonitorService: MonitorDeIntegracaoService) {}

  ngOnInit(): void {
    this.getIntegrationMonitor();

    this.timeOutCount = setInterval(() => {
      if (this.nextRequest == 0)
        this.nextRequest = 30;

      this.nextRequest--;
    }, 1000);

    this.timeOutRequest = setInterval(() => {
      this.getIntegrationMonitor();
    }, 30000);
  }

  getIntegrationMonitor() {
    this.integrationMonitorService
      .get()
      .subscribe((x: IntegrationMonitor[]) => {
        this.items = x;
      });
  }

  ngOnDestroy(): void {
    clearInterval(this.timeOutRequest);
    clearInterval(this.timeOutCount);
  }
}
