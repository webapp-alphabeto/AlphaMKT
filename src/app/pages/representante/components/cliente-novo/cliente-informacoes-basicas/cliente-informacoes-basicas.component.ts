import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { environment } from "src/environments/environment";
import { IRepresentanteClienteEdit } from "../../../Interfaces/irepresentante-cliente-edit";
import { ClienteService } from "../../../services/cliente.service";
import { TokenService } from "src/app/core/services/token.service";

@Component({
  selector: "app-cliente-informacoes-basicas",
  templateUrl: "./cliente-informacoes-basicas.component.html",
  styleUrls: ["./cliente-informacoes-basicas.component.css"],
})
export class ClienteInformacoesBasicasComponent implements OnInit {
  @ViewChild("clienteForm", { static: true }) clienteForm: NgForm;
  @Input() clienteEdit = {} as IRepresentanteClienteEdit;

  classificacaoDeCredito: string = "-.- ---";
  cidadeService = `${environment.serviceApi}cidades/po-combo`;

  constructor(
    private clienteService: ClienteService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.clienteEdit.representanteId = this.tokenService.DadosDoUsuario.representanteId;
  }

  consultCustomer() {
    
    const documento = this.clienteEdit.documento;

    this.clienteService
      .get(documento, this.tokenService.DadosDoUsuario.representanteId)
      .subscribe((resposta: any) => {
        const cliente = resposta.cliente as IRepresentanteClienteEdit;
        this.atribuirPropriedadesDocliente(cliente);
        this.classificacaoDeCredito =
          resposta.consultaDados.resultadoAnalise.classificacao;
      });
  }

  private atribuirPropriedadesDocliente(cliente: IRepresentanteClienteEdit) {
    const propriedades = Object.keys(cliente);
    for (const propriedade of propriedades)
      this.clienteEdit[propriedade] = cliente[propriedade];
  }

  corDoLimiteDeCredito(): string {
    if (this.classificacaoDeCredito == "Sem análise") return "danger";
    if (this.clienteEdit.limiteDeCredito > 0) return "success";
    return "info";
  }
}
