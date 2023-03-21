import { Pipe, PipeTransform } from "@angular/core";
import { BusStopNames } from "../model-buses/BusStop.model";

@Pipe({
  name: "norepeats",
})
export class NoRepeatsPipe implements PipeTransform {
  transform(values: BusStopNames): BusStopNames {
    const uniqueNames = new Set<string>();
    return values.filter((value) => {
      if (uniqueNames.has(value.name)) {
        return false;
      } else {
        uniqueNames.add(value.name);
        return true;
      }
    });
  }
}

