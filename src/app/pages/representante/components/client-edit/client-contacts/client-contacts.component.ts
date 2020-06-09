import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Contato } from "../../../interfaces/imy-client";
import {
  PoTableColumn,
  PoTableAction,
  PoModalComponent,
  PoDialogService,
  PoNotificationService,
  PoDialogType,
  PoModalAction,
} from "@po-ui/ng-components";
import { ContatoService } from "../../../services/contato.service";

@Component({
  selector: "app-client-contacts",
  templateUrl: "./client-contacts.component.html",
  styleUrls: ["./client-contacts.component.css"],
})
export class ClientContactsComponent implements OnInit {
  @ViewChild("editContact", { static: true }) editaContact: PoModalComponent;
  @Input() contacts: Contato[];
  @Input() clientId: number;
  contact: Contato;

  columns: Array<PoTableColumn> = [
    { property: "tipo", label: "Tipo" },
    { property: "nome", label: "Nome" },
    { property: "telefone", label: "Telefone" },
    { property: "email", label: "Email" },
  ];

  actions: Array<PoTableAction> = [
    {
      label: "Editar",
      action: this.openForEdit.bind(this),
    },
    {
      label: "Excluir",
      action: () => {
        this.poDialogDelete.openDialog(PoDialogType.Alert, {
          title: "Deseja deletar esse contato:",
          message: "Essa ação é irreversível",
          confirm: this.deleteById.bind(this),
        });
      },
    },
  ];

  modalEditPrimaryAction: PoModalAction = {
    action: () => this.save(),
    label: "Salvar",
  };

  constructor(
    private poDialogDelete: PoDialogService,
    private poNotification: PoNotificationService,
    private contatoService: ContatoService
  ) {}

  ngOnInit(): void {}

  deleteById(contact: Contato) {
    this.poNotification.success(`${contact.nome} Deletado!`);
  }

  openForEdit(contact: Contato) {
    console.log("x");
    this.contact = contact;
    this.editaContact.open();
  }

  openForCreate() {
    this.contact = {
      clienteId: this.clientId,
    } as Contato;
    this.editaContact.open();
  }

  save() {
    if (this.contact.id) {
      this.poNotification.success("update");
      return;
    }

    this.contatoService.post(this.contact).subscribe((x) => {
      this.editaContact.close();
    });
  }

  getContacts() {
    this.contacts.length = 0;

    this.contatoService.get(this.clientId).subscribe((x) => {
      this.contacts.push(x[x.length-1])
    });
  }
}
