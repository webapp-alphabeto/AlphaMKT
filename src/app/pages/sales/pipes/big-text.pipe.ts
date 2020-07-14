import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "bigText",
})
export class BigTextPipe implements PipeTransform {
  transform(value: string, max: number): string {
    if (value.length > max) return value.substring(0, max) + "..";
    return value;
  }
}
