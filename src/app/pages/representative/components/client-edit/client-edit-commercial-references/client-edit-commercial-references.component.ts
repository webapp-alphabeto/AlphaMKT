import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { ICommercialReference } from 'src/app/shared/models/ICommercialReference';
import { PoModalComponent, PoTableColumn, PoTableAction, PoModalAction, PoDialogService, PoDialogType } from '@po-ui/ng-components';
import { CommercialReferenceService } from 'src/app/shared/services/commercial-reference.service';

@Component({
  selector: "app-client-edit-commercial-references",
  templateUrl: "./client-edit-commercial-references.component.html",
  styleUrls: ["./client-edit-commercial-references.component.css"],
})
export class ClientEditCommercialReferencesComponent implements OnInit {
  @ViewChild("editCommercialReference", { static: true }) editCommercialReference: PoModalComponent;
  @Input() commercialReferences: ICommercialReference[];
  @Input() clientId: number;
  commercialReference: ICommercialReference;

  columns: Array<PoTableColumn> = [
    { property: "cnpj", label: "Cnpj" },
    { property: "company", label: "Empresa" },
    { property: "contact", label: "Contato" },
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
    private commercialReferenceService: CommercialReferenceService
  ) {}

  ngOnInit(): void {}

  checkDelete(commercialReference: ICommercialReference) {
    this.poDialogDelete.openDialog(PoDialogType.Alert, {
      title: `Deseja deletar essa referência?`,
      message: "Essa ação é irreversível",
      ok: () => {
        this.deleteById(commercialReference);
      },
    });
  }

  deleteById(commercialReference: ICommercialReference) {
    this.commercialReferenceService.delete(commercialReference.id).subscribe(() => {
      this.getCommercialReferences();
    });
  }

  openForEdit(commercialReference: ICommercialReference) {
    this.commercialReference = commercialReference;
    this.editCommercialReference.open();
  }

  openForCreate() {
    console.log(this.clientId);
    this.commercialReference = {
      clientId: this.clientId,
    } as ICommercialReference;
    this.editCommercialReference.open();
  }

  save() {
    if (this.commercialReference.id) {
      this.commercialReferenceService.put(this.commercialReference).subscribe(() => {
        this.editCommercialReference.close();
        this.getCommercialReferences();
      });
      return;
    }

    this.commercialReferenceService.post(this.commercialReference).subscribe(() => {
      this.editCommercialReference.close();
      this.getCommercialReferences();
    });
  }

  getCommercialReferences() {
    this.commercialReferenceService.get(this.clientId).subscribe((x) => {
      this.commercialReferences = x;
    });
  }
}
