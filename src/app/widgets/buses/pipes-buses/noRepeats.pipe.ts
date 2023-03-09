import { Pipe, PipeTransform } from "@angular/core";
import { busStopNames } from "../model-buses/busStop.model";

@Pipe({
  name: "norepeats",
})
export class NoRepeatsPipe implements PipeTransform {
  transform(values: busStopNames): busStopNames {
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

