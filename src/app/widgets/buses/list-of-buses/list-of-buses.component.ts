import { Component, Input } from "@angular/core";
import { busStopNames } from "../interfaces-buses/busStop";
import { UpperCaseBusStopsService } from "../upper-case-bus-stops.service";

@Component({
  selector: "app-list-of-buses",
  templateUrl: "./list-of-buses.component.html",
  styleUrls: ["./list-of-buses.component.scss"],
})
export class ListOfBusesComponent {
  @Input() busStops: busStopNames = [];

  constructor(private upperCaseBusStopsService: UpperCaseBusStopsService) {}

  getUpperCaseNames(busStops: busStopNames) {
    return this.upperCaseBusStopsService.getUpperCaseNames(busStops);
  }

  ngOnInit() {
    this.busStops = Object.values(this.busStops);
  }

}
