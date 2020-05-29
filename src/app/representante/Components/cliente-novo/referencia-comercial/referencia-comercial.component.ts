import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { IReferenciaComercial } from "src/app/representante/interfaces/ireferencia-comercial";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-referencia-comercial",
  templateUrl: "./referencia-comercial.component.html",
  styleUrls: ["./referencia-comercial.component.css"],
})
export class ReferenciaComercialComponent implements OnInit {
  @ViewChild(NgForm, { static: true }) form: NgForm;
  @Input() referenciasComerciais = [] as IReferenciaComercial[];
  referenciaComercial = {} as IReferenciaComercial;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const novoItem = this.form.value;
    this.referenciasComerciais.push(novoItem);
    this.form.reset();
  }
}
