import { Pipe, PipeTransform } from "@angular/core";
import { BusStopNames } from "../model-buses/BusStop.model";

@Pipe({
  name: "onlyuppercase",
})
export class OnlyUpperCase implements PipeTransform {
  transform(values: BusStopNames): BusStopNames {
    if (!values) {
      return [];
    }
    return values.filter((value) => value.name.toUpperCase() === value.name);
  }
}
