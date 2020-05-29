import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { PoTableColumn, PoNotificationService } from "@po-ui/ng-components";
import { NgForm } from "@angular/forms";
import { Contato } from '../../../Interfaces/contato';

@Component({
  selector: "app-contatos",
  templateUrl: "./contatos.component.html",
  styleUrls: ["./contatos.component.css"],
})
export class ContatosComponent implements OnInit {
  @ViewChild(NgForm, { static: true }) form: NgForm;
  @Input() contatos = [] as Contato[];

  contato = {} as Contato;
  mostrarFormulario = true;
  columns: Array<PoTableColumn> = [
    { property: "nome", label: "Nome" },
    { property: "telefone", label: "Telefone" },
    { property: "email", label: "Email" },
  ];

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit(): void {}

  incluir() {
    const novoItem = this.form.value as Contato;

    if (this.verificarSeContatoJaFoiInformado(novoItem)) return;

    this.contatos.push(novoItem);
    this.form.reset();
  }

  private verificarSeContatoJaFoiInformado(novoItem: Contato): boolean {
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
