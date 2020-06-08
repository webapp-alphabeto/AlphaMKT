import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import {
  PoNotificationService,
  PoDialogService,
  PoDialogType,
} from "@po-ui/ng-components";

import { ToolBarService } from "src/app/shared/services/tool-bar.service";
import { IRepresentanteClienteEdit } from "../../interfaces/irepresentante-cliente-edit";
import { Contato } from "../../interfaces/contato";
import { FotosDoPonto } from "../../Interfaces/fotos-do-ponto";
import { IReferenciaComercial } from "../../Interfaces/ireferencia-comercial";
import { ClienteService } from "../../services/cliente.service";

@Component({
  selector: "app-cliente-novo",
  templateUrl: "./cliente-novo.component.html",
  styleUrls: ["./cliente-novo.component.css"],
})
export class ClienteNovoComponent implements OnInit, OnDestroy {
  clientEdit = {
    limiteDeCredito: 0,
    contatos: [] as Contato[],
    referenciasComerciais: [] as IReferenciaComercial[],
    fotos: [] as FotosDoPonto[],
  } as IRepresentanteClienteEdit;

  constructor(
    public toolBarService: ToolBarService,
    public poDialog: PoDialogService,
    private poNotification: PoNotificationService,
    private route: Router,
    private clientService: ClienteService
  ) {}

  ngOnInit(): void {
    this.toolBarService.ocultar();
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
    this.poDialog.openDialog(PoDialogType.Confirm, {
      message:
        "Tudo certo? Se sim ao clicar em confirmar o cliente será incluído.",
      title: "Inclusão de cliente",
      confirm: () => this.confirmarInclusao(),
    });
  }

  confirmarInclusao() {
    this.clientService
      .add(this.clientEdit)
      .subscribe((x: IRepresentanteClienteEdit) => {
        this.poNotification.success(`Cliente incluido.`);
        this.route.navigateByUrl("/representante/home");
      });
  }
}
