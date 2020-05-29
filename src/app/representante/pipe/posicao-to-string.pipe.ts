import { Pipe, PipeTransform } from "@angular/core";
import { PosicaoDataFoto } from "../enums/posicao-da-foto.enum";

@Pipe({
  name: "posicaoToString",
})
export class PosicaoToStringPipe implements PipeTransform {
  transform(value: PosicaoDataFoto, ...args: unknown[]): unknown {
    switch (value) {
      case PosicaoDataFoto.Fachada:
        return "Fachada";
      case PosicaoDataFoto.DaPortaParaOsFundos:
        return "Da porta para os fundos";
      case PosicaoDataFoto.DosFundosParaAPorta:
        return "Dos fundos para a porta";
    }
  }
}
