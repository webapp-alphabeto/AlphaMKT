import { Pipe, PipeTransform } from "@angular/core";
import { PosicaoDaFoto } from "../enums/posicao-da-foto.enum";

@Pipe({
  name: "posicaoToString",
})
export class PosicaoToStringPipe implements PipeTransform {
  transform(value: PosicaoDaFoto, ...args: unknown[]): unknown {
    switch (value) {
      case PosicaoDaFoto.Fachada:
        return "Fachada";
      case PosicaoDaFoto.DaPortaParaOsFundos:
        return "Da porta para os fundos";
      case PosicaoDaFoto.DosFundosParaAPorta:
        return "Dos fundos para a porta";
    }
  }
}
