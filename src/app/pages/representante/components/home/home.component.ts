import { Component, OnInit } from "@angular/core";
import { IApresentacaoButtons } from "src/app/shared/interfaces/iapresentacao-buttons";
import { Router } from '@angular/router';
import { ToolBarService } from 'src/app/shared/services/tool-bar.service';

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

  constructor(private route: Router, private toolBarService: ToolBarService) {}

  ngOnInit(): void {
    
  }

  irParaCliente() {
    this.route.navigateByUrl('/representante/cliente-novo');    
  }

  irParaVendas() {
    console.log("rota para vendas");
  }
}
