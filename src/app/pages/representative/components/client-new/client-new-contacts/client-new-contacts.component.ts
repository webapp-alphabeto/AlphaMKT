import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { PoTableColumn, PoNotificationService } from "@po-ui/ng-components";
import { NgForm } from "@angular/forms";
import { NewContact } from "../../../interfaces/NewContact";

@Component({
  selector: "app-client-new-contacts",
  templateUrl: "./client-new-contacts.component.html",
  styleUrls: ["./client-new-contacts.component.css"],
})
export class ClientNewContactsComponent implements OnInit {
  @ViewChild(NgForm, { static: true }) form: NgForm;
  @Input() contacts = [] as NewContact[];

  contact = {} as NewContact;
  showForm = true;
  columns: Array<PoTableColumn> = [
    { property: "type", label: "Tipo" },
    { property: "name", label: "Nome" },
    { property: "phone", label: "Telefone" },
    { property: "email", label: "Email" },
  ];

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit(): void {}

  add() {
    const newItem = this.form.value as NewContact;

    if (this.exists(newItem)) return;

    this.contacts.push(newItem);
    this.form.reset();
  }

  private exists(newItem: NewContact): boolean {
    const props = Object.keys(newItem);
    for (const contact of this.contacts) {
      for (const prop of props)
        if (contact[prop] == newItem[prop])
          return this.notifyExistence(prop);
    }

    return false;
  }

  private notifyExistence(field: string): boolean {
    this.poNotification.error(`Você já informou um contato com esse ${field}.`);
    return true;
  }
}
