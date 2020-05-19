import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import { ToolBarService } from "src/app/services/tool-bar.service";
import { NgForm } from "@angular/forms";
import {
  PoNotificationService,
  PoStepperComponent,
} from "@po-ui/ng-components";
import { IReferenciaComercial } from "src/app/interfaces/ireferencia-comercial";

@Component({
  selector: "app-cliente-novo",
  templateUrl: "./cliente-novo.component.html",
  styleUrls: ["./cliente-novo.component.css"],
})
export class ClienteNovoComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(PoStepperComponent, { static: true }) stepper: PoStepperComponent;
  constructor(
    public toolBarService: ToolBarService,
    private poNotification: PoNotificationService
  ) {}

  ngOnInit(): void {
    this.toolBarService.ocultar();
  }

  //TODO: Método existente somente para debug
  ngAfterViewInit(): void {
    this.stepper.active(1);
  }
  ngOnDestroy(): void {
    this.toolBarService.exibir();
  }

  canActiveNextStep(form: NgForm) {
    if (form.invalid)
      this.poNotification.error("Preencha todos campos obrigatórios");
    return form.valid;
  }

  canActiveNextStep2(items: Array<IReferenciaComercial>) {
    if (items.length < 3)
      this.poNotification.error("Preencha ao menos 3 fornecedores");
    return items.length >= 3;
  }
}
