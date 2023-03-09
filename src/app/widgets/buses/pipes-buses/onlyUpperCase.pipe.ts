import { Pipe, PipeTransform } from "@angular/core";
import { busStopName } from "../model-buses/busStop.model";

@Pipe({
  name: "onlyuppercase",
})
export class OnlyUpperCase implements PipeTransform {
  transform(values: busStopName[]): busStopName[] {
    if (!values) {
      return [];
    }
    return values.filter((value) => value.name.toUpperCase() === value.name);
  }
}
