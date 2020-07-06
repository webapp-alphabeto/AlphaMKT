import { Pipe, PipeTransform } from "@angular/core";
import { VirtualStockGroupByReference } from '../interfaces/VirtualStockGroupByReference';

@Pipe({
  name: "filterByReference",
})
export class FilterByReferencePipe implements PipeTransform {
  transform(value: VirtualStockGroupByReference[], reference: string): VirtualStockGroupByReference[] {
    if (!reference) return value;

    return value.filter((x) => x.reference == reference);
  }
}
