import { Injectable } from "@angular/core";
import { busStopNames } from "../model-buses/busStop.model";

@Injectable({
  providedIn: "root",
})
export class UpperCaseBusStopsService {
  getUpperCaseNames(busStops: busStopNames) {
    const upperCaseNames: busStopNames = [];

    if (busStops) {
      for (const busStop of Object.values(busStops)) {
        const name = busStop.name;
        if (name === name.toUpperCase()) {
          upperCaseNames.push(busStop);
        }
      }
    }
    return upperCaseNames;
  }
}
