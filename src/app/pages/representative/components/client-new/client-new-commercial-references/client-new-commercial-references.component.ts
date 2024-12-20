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
  @Input() commercialReferences = [] as NewComercialReferences[];
  commercialReference = {} as NewComercialReferences;
  constructor() {}

  ngOnInit(): void {}

  add() {
    const newItem = this.form.value;
    this.commercialReferences.push(newItem);
    this.form.reset();
  }
}
