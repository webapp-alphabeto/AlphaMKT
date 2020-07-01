import { Pipe, PipeTransform } from "@angular/core";
import { ProductsView } from "../interfaces/ProductsView";

@Pipe({
  name: "filterByReference",
})
export class FilterByReferencePipe implements PipeTransform {
  transform(value: ProductsView[], reference: string): ProductsView[] {
    if (!reference) return value;

    return value.filter((x) => x.reference == reference);
  }
}
