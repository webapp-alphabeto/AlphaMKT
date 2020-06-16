import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import {
  PoNotificationService,
  PoDialogService,
  PoDialogType,
} from "@po-ui/ng-components";

import { ToolBarService } from "src/app/shared/services/tool-bar.service";
import { NewClient } from "../../interfaces/NewClient";
import { NewContact } from "../../interfaces/NewContact";
import { NewComercialReferences } from "../../interfaces/NewComercialReferences";
import { ClientService } from "../../services/client.service";
import { UploadResponse } from '../../interfaces/UploadResponse';

@Component({
  selector: "app-client-new",
  templateUrl: "./client-new.component.html",
  styleUrls: ["./client-new.component.css"],
})
export class ClientNewComponent implements OnInit, OnDestroy {
  clientEdit = {
    creditLimit: 0,
    contacts: [] as NewContact[],
    commercialReferences: [] as NewComercialReferences[],
    photos: [] as UploadResponse[],
  } as NewClient;

  constructor(
    public toolBarService: ToolBarService,
    public poDialog: PoDialogService,
    private poNotification: PoNotificationService,
    private route: Router,
    private clientService: ClientService
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

  validarReferenciasComerciais(items: Array<NewComercialReferences>) {
    if (items.length < 3)
      this.poNotification.error("Preencha ao menos 3 fornecedores");
    return items.length >= 3;
  }

  validarFotosDoPonto(items: Array<UploadResponse>) {
    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      if (item.name == null) {
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
      .subscribe((x: NewClient) => {
        this.poNotification.success(`Cliente incluido.`);
        this.route.navigateByUrl("/representante/home");
      });
  }
}
