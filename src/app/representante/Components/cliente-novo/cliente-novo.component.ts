import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import {
  PoNotificationService,
  PoStepperComponent,
  PoDialogService,
  PoDialogType,
} from "@po-ui/ng-components";

import { ToolBarService } from "src/app/services/tool-bar.service";
import { IReferenciaComercial } from "src/app/representante/interfaces/ireferencia-comercial";
import { IRepresentanteClienteEdit } from "../../Interfaces/irepresentante-cliente-edit";
import { Contato } from "../../Interfaces/contato";
import { FotosDoPonto } from "../../Interfaces/fotos-do-ponto";

@Component({
  selector: "app-cliente-novo",
  templateUrl: "./cliente-novo.component.html",
  styleUrls: ["./cliente-novo.component.css"],
})
export class ClienteNovoComponent implements OnInit, OnDestroy {
  @ViewChild(PoStepperComponent, { static: true }) stepper: PoStepperComponent;
  clientEdit = {
    limiteDeCredito: 0,
    contatos: [] as Contato[],
    referenciasComerciais: [] as IReferenciaComercial[],
    fotos: [] as FotosDoPonto[],
  } as IRepresentanteClienteEdit;

  constructor(
    public toolBarService: ToolBarService,
    public poDialog: PoDialogService,
    private poNotification: PoNotificationService
  ) {}

  ngOnInit(): void {
    this.toolBarService.ocultar();
    this.clientEdit = JSON.parse(localStorage.getItem("mock"));
  }

  ngOnDestroy(): void {
    this.toolBarService.exibir();
  }

  validarInformacaoesBasicas(form: NgForm) {
    if (form.invalid)
      this.poNotification.error("Preencha todos campos obrigatórios");
    return form.valid;
  }

  validarReferenciasComerciais(items: Array<IReferenciaComercial>) {
    if (items.length < 3)
      this.poNotification.error("Preencha ao menos 3 fornecedores");
    return items.length >= 3;
  }

  validarFotosDoPonto(items: Array<FotosDoPonto>) {
    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      if (item.nome == null) {
        this.poNotification.error("É obrigatório incluir as 3 fotos do ponto");
        return false;
      }
    }
    return true;
  }

  incluir() {
    // localStorage.setItem("mock", JSON.stringify(this.clientEdit));
    this.poDialog.openDialog(PoDialogType.Confirm, {
      message: "Cliente incluído com sucesso, você pode fazer uma venda agora.",

      title: "Inclusão de cliente",
    });
  }
}
