import { Component, OnInit, Input } from "@angular/core";
import { ReferenciaComercial } from "../../../interfaces/imy-client";

@Component({
  selector: "app-client-comercial-references",
  templateUrl: "./client-comercial-references.component.html",
  styleUrls: ["./client-comercial-references.component.css"],
})
export class ClientComercialReferencesComponent implements OnInit {
  @Input() comercialReferences: ReferenciaComercial[];
  constructor() {}

  ngOnInit(): void {}
}
