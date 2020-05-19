import { Component, OnInit, ViewChild } from "@angular/core";
import { IReferenciaComercial } from "src/app/interfaces/ireferencia-comercial";
import { NgForm } from "@angular/forms";
import { PoTableComponent, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: "app-referencia-comercial",
  templateUrl: "./referencia-comercial.component.html",
  styleUrls: ["./referencia-comercial.component.css"],
})
export class ReferenciaComercialComponent implements OnInit {
  @ViewChild(NgForm, { static: true }) form: NgForm;
  @ViewChild(PoTableComponent, {static:true}) table: PoTableComponent;
  referenciaComercial = {} as IReferenciaComercial;
  referenciasComerciais = [] as IReferenciaComercial[];
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const novoItem = this.form.value;
    this.referenciasComerciais.push(novoItem);
    this.form.reset();
  }
}
