import { Pipe, PipeTransform } from "@angular/core";
import { busStopNames } from "../model-buses/busStop.model";

@Pipe({
  name: "onlyuppercase",
})
export class OnlyUpperCase implements PipeTransform {
  transform(values: busStopNames): busStopNames {
    if (!values) {
      return [];
    }
    return values.filter((value) => value.name.toUpperCase() === value.name);
  }
}
