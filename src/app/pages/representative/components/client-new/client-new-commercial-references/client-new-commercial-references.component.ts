import { Component, OnInit, ViewChild, Input } from "@angular/core";

import { NgForm } from "@angular/forms";
import { NewComercialReferences } from '../../../interfaces/NewComercialReferences';

@Component({
  selector: "app-client-new-commercial-references",
  templateUrl: "./client-new-commercial-references.component.html",
  styleUrls: ["./client-new-commercial-references.component.css"],
})
export class ClientNewCommercialReferencesComponent implements OnInit {
  @ViewChild(NgForm, { static: true }) form: NgForm;
  @Input() referenciasComerciais = [] as NewComercialReferences[];
  referenciaComercial = {} as NewComercialReferences;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const novoItem = this.form.value;
    this.referenciasComerciais.push(novoItem);
    this.form.reset();
  }
}
