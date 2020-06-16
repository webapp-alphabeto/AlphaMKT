import { Component, OnInit, Input, ViewChild } from "@angular/core";

import {
  PoTableColumn,
  PoTableAction,
  PoModalComponent,
  PoDialogService,
  PoNotificationService,
  PoDialogType,
  PoModalAction,
} from "@po-ui/ng-components";
import { ContactService } from "../../../../../shared/services/contact.service";
import { IContact } from 'src/app/shared/models/IContact';

@Component({
  selector: "app-client-edit-contacts",
  templateUrl: "./client-edit-contacts.component.html",
  styleUrls: ["./client-edit-contacts.component.css"],
})
export class ClientEditContactsComponent implements OnInit {
  @ViewChild("editContact", { static: true }) editaContact: PoModalComponent;
  @Input() contacts: IContact[];
  @Input() clientId: number;
  contact: IContact;

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
    private contatoService: ContactService
  ) {}

  ngOnInit(): void {}

  deleteById(contact: IContact) {
    this.poNotification.success(`${contact.name} Deletado!`);
  }

  openForEdit(contact: IContact) {
    this.contact = contact;
    this.editaContact.open();
  }

  openForCreate() {
    this.contact = {
      clientId: this.clientId,
    } as IContact;
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
