import { Component, OnInit, Input } from "@angular/core";
import { environment, SEM_FOTO } from "src/environments/environment";
import { HttpResponse } from "@angular/common/http";
import { FotosDoPonto } from '../../../Interfaces/fotos-do-ponto';
import { DataFoto } from '../../../Interfaces/data-foto';
import { PosicaoDataFoto } from '../../../enums/posicao-da-foto.enum';

@Component({
  selector: "app-fotos-do-ponto",
  templateUrl: "./fotos-do-ponto.component.html",
  styleUrls: ["./fotos-do-ponto.component.css"],
})
export class FotosDoPontoComponent implements OnInit {
  @Input() cnpj: string;
  @Input() fotos: FotosDoPonto[];
  serviceApi = `${environment.serviceApi}novo-cliente/upload`;
  fotoPadrao = SEM_FOTO;

  fachada = {
    dataFoto: {
      cnpj: this.cnpj,
      posicaoDaFoto: PosicaoDataFoto.Fachada,
    } as DataFoto,
  } as FotosDoPonto;

  daPortaParaOsFundos = {
    dataFoto: {
      cnpj: this.cnpj,
      posicaoDaFoto: PosicaoDataFoto.DaPortaParaOsFundos,
    } as DataFoto,
  } as FotosDoPonto;

  dosFundosParaAPorta = {
    dataFoto: {
      cnpj: this.cnpj,
      posicaoDaFoto: PosicaoDataFoto.DosFundosParaAPorta,
    } as DataFoto,
  } as FotosDoPonto;

  constructor() {}

  ngOnInit(): void {
    if (this.fotos.length == 0) {
      this.fotos.push(this.fachada);
      this.fotos.push(this.daPortaParaOsFundos);
      this.fotos.push(this.dosFundosParaAPorta);
    }
  }

  retornoComSucesso(reponse: HttpResponse<FotosDoPonto>, item: FotosDoPonto) {
    item.nome = reponse.body.nome;
    item.url = reponse.body.url;
  }

  setDataFoto(event: any, item: FotosDoPonto) {
    item.dataFoto.cnpj = this.cnpj;
    event.data = item.dataFoto;
  }
}
