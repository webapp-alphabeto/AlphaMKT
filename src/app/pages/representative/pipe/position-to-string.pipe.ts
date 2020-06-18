import { Pipe, PipeTransform } from "@angular/core";
import { PhotoPosition } from "../enums/photo-position.enum";

@Pipe({
  name: "positionToString",
})
export class PositionToStringPipe implements PipeTransform {
  transform(value: PhotoPosition, ...args: unknown[]): string {
    switch (value) {
      case PhotoPosition.Fachada:
        return "Fachada";
      case PhotoPosition.DaPortaParaOsFundos:
        return "Da porta para os fundos";
      case PhotoPosition.DosFundosParaAPorta:
        return "Dos fundos para a porta";
    }
  }
}
