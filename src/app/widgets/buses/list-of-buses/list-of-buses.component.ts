import { Component, Input} from "@angular/core";
import { busStopNames } from "../interfaces/busStop";

@Component({
  selector: "app-list-of-buses",
  templateUrl: "./list-of-buses.component.html",
  styleUrls: ["./list-of-buses.component.scss"],
})
export class ListOfBusesComponent {
  @Input() busStops: busStopNames = [];

  getNames(busStops: busStopNames) {
    const upperCaseNames = new Set<string>();

    if (busStops) {
      for (const busStop of Object.values(busStops)) {
        const name = busStop.name;
        if (name === name.toUpperCase()) {
          upperCaseNames.add(name);
        }
      }
    }
    return Array.from(upperCaseNames);
  }
}
