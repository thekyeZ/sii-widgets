import { UpperCasePipe } from "@angular/common";
import { Component,EventEmitter, Input, Output } from "@angular/core";
import { busStop } from "../interfaces/busStop";
// import { busStopName } from "../interfaces/busStopName";

@Component({
  selector: "app-list-of-buses",
  templateUrl: "./list-of-buses.component.html",
  styleUrls: ["./list-of-buses.component.scss"],
})
export class ListOfBusesComponent {
  @Input() busStops: busStop[] = [];
  @Output() busStopSelected = new EventEmitter<string>();

  getUniqueNames(busStops: busStop[]): string[] {
    const uniqueNames = new Set<string>();
  
    if (busStops) {
      Object.values(busStops).forEach((busStop) => {
        const name = busStop && busStop.name ? busStop.name.trim().toLowerCase() : '';
        if (name) {
          uniqueNames.add(name);
        }
      });
    }
  
    return Array.from(uniqueNames);
  }

  selectBusStop(busStopName: string) {
    this.busStopSelected.emit(busStopName);
  }
}
