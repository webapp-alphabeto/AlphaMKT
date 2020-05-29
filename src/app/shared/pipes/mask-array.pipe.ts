import { Pipe, PipeTransform } from "@angular/core";
import { MaskPipe } from "ngx-mask";
// import { MaskPipe } from "ngx-mask";

@Pipe({
  name: "maskArray",
})
export class MaskArrayPipe implements PipeTransform {
  constructor(private ngMask: MaskPipe) {};

  transform(value: any[], field: string, mask: string): unknown {
    value.map((x) => (x[field] = this.ngMask.transform(x[field], mask)))
    return value;
  }
}
