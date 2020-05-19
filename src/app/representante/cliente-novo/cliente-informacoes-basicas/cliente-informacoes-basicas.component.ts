import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { IClienteEdit } from "src/app/interfaces/icliente-edit";
import { PoNotificationService, PoButtonComponent } from "@po-ui/ng-components";
import { DepsService } from "src/app/services/deps.service";
import { Form, NgForm } from "@angular/forms";
import { switchMap, map } from "rxjs/operators";

@Component({
  selector: "app-cliente-informacoes-basicas",
  templateUrl: "./cliente-informacoes-basicas.component.html",
  styleUrls: ["./cliente-informacoes-basicas.component.css"],
})
export class ClienteInformacoesBasicasComponent implements OnInit {
  @ViewChild("limiteInfo", { read: ElementRef, static: true })
  limiteInfoRef: ElementRef;
  @ViewChild("clienteForm", { static: true }) clienteForm: NgForm;

  poButton: PoButtonComponent;

  clienteEdit = {
    pessoa: "J",
  } as IClienteEdit;
  classificacaoDeCredito: string;
  risco: string;
  constructor(
    private depsService: DepsService,
    private poNotification: PoNotificationService
  ) {}

  ngOnInit(): void {}

  buscarNoDeps() {
    this.depsService
      .analiseCliente(this.clienteEdit.documento)
      .pipe(
        switchMap(() =>
          this.depsService.consultaDados(this.clienteEdit.documento)
        )
      )
      .subscribe(
        (cliente) => {
          console.log(cliente);
          if (cliente == null) return;
          this.clienteEdit.razaoSocial = cliente.dadosCadastrais.razaoSocial;
          this.clienteEdit.nomeFantasia = cliente.dadosCadastrais.nome;
          this.clienteEdit.endereco = `${cliente.enderecos.endereco[0].rua}, ${cliente.enderecos.endereco[0].numero}`;
          this.clienteEdit.bairro = cliente.enderecos.endereco[0].bairro;
          this.clienteEdit.complemento =
            cliente.enderecos.endereco[0].complemento;
          this.clienteEdit.cep = cliente.enderecos.endereco[0].cep;
          this.clienteEdit.inscricaoEstadual =
            cliente.dadosCadastrais.inscricaoEstadual ?? "ISENTO";
          this.clienteEdit.limiteDeCredito =
            cliente.resultadoAnalise.limiteSugerido ?? 0;
          this.classificacaoDeCredito = cliente.resultadoAnalise.classificacao;
          this.risco = cliente.resultadoAnalise.risco;
        },
        (err) => {
          this.poNotification.error(err.message);
        }
      );
  }
}
