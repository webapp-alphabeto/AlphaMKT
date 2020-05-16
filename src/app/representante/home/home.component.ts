import { Component, OnInit } from "@angular/core";
import { IApresentacaoButtons } from "src/app/interfaces/iapresentacao-buttons";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  buttons: IApresentacaoButtons[] = [
    {
      buttonAction: () => {
        this.irParaCliente();
      },
      buttonIcon: "po-icon po-icon-user",
      buttonLabel: "Clientes",
    },
    {
      buttonAction: () => {
        this.irParaVendas();
      },
      buttonIcon: "po-icon po-icon-sale",
      buttonLabel: "Vendas",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  irParaCliente() {
    console.log("rota para cliente");
  }

  irParaVendas() {
    console.log("rota para vendas");
  }
}
