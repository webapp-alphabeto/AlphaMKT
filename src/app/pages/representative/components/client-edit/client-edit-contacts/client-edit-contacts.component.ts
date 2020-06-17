import { Component, OnInit, Input, ViewChild } from "@angular/core";

import {
  PoTableColumn,
  PoTableAction,
  PoModalComponent,
  PoDialogService,
  PoDialogType,
  PoModalAction,
} from "@po-ui/ng-components";
import { ContactService } from "../../../../../shared/services/contact.service";
import { IContact } from "src/app/shared/models/IContact";

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
    { property: "type", label: "Tipo" },
    { property: "name", label: "Nome" },
    { property: "phone", label: "Telefone" },
    { property: "email", label: "Email" },
  ];

  actions: Array<PoTableAction> = [
    {
      label: "Editar",
      action: this.openForEdit.bind(this),
    },
    {
      label: "Excluir",
      action: this.checkDelete.bind(this),
    },
  ];

  modalEditPrimaryAction: PoModalAction = {
    action: () => this.save(),
    label: "Salvar",
  };

  constructor(
    private poDialogDelete: PoDialogService,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {}

  checkDelete(contact: IContact) {
    this.poDialogDelete.openDialog(PoDialogType.Alert, {
      title: `Deseja deletar esse contato?`,
      message: "Essa ação é irreversível",
      ok: () => {
        this.deleteById(contact);
      },
    });
  }

  deleteById(contact: IContact) {
    this.contactService.delete(contact.id).subscribe(() => {
      this.getContacts();
    });
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
      this.contactService.put(this.contact).subscribe(() => {
        this.editaContact.close();
        this.getContacts();
      });
      return;
    }

    this.contactService.post(this.contact).subscribe(() => {
      this.editaContact.close();
      this.getContacts();
    });
  }

  getContacts() {
    this.contactService.get(this.clientId).subscribe((x) => {
      this.contacts = x;
    });
  }
}
