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
  @Input() contatos = [] as NewContact[];

  contato = {} as NewContact;
  mostrarFormulario = true;
  columns: Array<PoTableColumn> = [
    { property: "tipo", label: "Tipo" },
    { property: "nome", label: "Nome" },
    { property: "telefone", label: "Telefone" },
    { property: "email", label: "Email" },
  ];

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit(): void {}

  incluir() {
    const novoItem = this.form.value as NewContact;

    if (this.verificarSeContatoJaFoiInformado(novoItem)) return;

    this.contatos.push(novoItem);
    this.form.reset();
  }

  private verificarSeContatoJaFoiInformado(novoItem: NewContact): boolean {
    const propriedades = Object.keys(novoItem);
    for (const contato of this.contatos) {
      for (const propriedade of propriedades)
        if (contato[propriedade] == novoItem[propriedade])
          return this.notificarExistencia(propriedade);
    }

    return false;
  }

  private notificarExistencia(campo: string): boolean {
    this.poNotification.error(`Você já informou um contato com esse ${campo}.`);
    return true;
  }
}
