import { Component,EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-list-of-buses",
  templateUrl: "./list-of-buses.component.html",
  styleUrls: ["./list-of-buses.component.scss"],
})
export class ListOfBusesComponent {
  @Input() busStops: any[] = [];

  getUniqueNames(busStops: any[]): string[] {
    const uniqueNames = new Set<string>();
  
    if (busStops && typeof busStops === 'object') {
      Object.values(busStops).forEach((busStop) => {
        const name = busStop && busStop.name ? busStop.name.trim().toLowerCase() : '';
        if (name) {
          uniqueNames.add(name);
        }
      });
    }
  
    return Array.from(uniqueNames);
  }
}
