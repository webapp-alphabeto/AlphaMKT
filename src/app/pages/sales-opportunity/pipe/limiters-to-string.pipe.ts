import { Pipe, PipeTransform } from "@angular/core";
import { Limiters } from '../enums/limiters.enum';

@Pipe({
  name: "limitersToString",
})
export class LimitersToStringPipe implements PipeTransform {
  transform(value: Limiters, ...args: unknown[]): string {
    switch (value) {
      case Limiters.ByStock:
        return "Estoque";
      case Limiters.BySuggestion:
        return "Sugestão";
      case Limiters.ByVirtualStock:
        return "Estoque virtual";
    }
  }
}
