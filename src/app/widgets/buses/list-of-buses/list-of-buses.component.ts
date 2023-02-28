import { Component, Input } from "@angular/core";
import { busStopNames } from "../chosen-bus-stop/model-buses/busStop.model";
import { UpperCaseBusStopsService } from "../services-buses/upper-case-bus-stops.service";

@Component({
  selector: "app-list-of-buses",
  templateUrl: "./list-of-buses.component.html",
  styleUrls: ["./list-of-buses.component.scss"],
})
export class ListOfBusesComponent {
  @Input() busStops!: busStopNames;

  getUpperCaseNames(busStops: busStopNames) {
    return this.upperCaseBusStopsService.getUpperCaseNames(busStops);
  }

  constructor(private upperCaseBusStopsService: UpperCaseBusStopsService) {}

  ngOnInit() {
    this.busStops = Object.values(this.busStops);
  }
}
