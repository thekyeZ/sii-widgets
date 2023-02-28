import { Component, Input } from "@angular/core";
import { busStopNames } from "../interfaces-buses/busStop";
import { UpperCaseBusStopsService } from "../services/upper-case-bus-stops.service";
import { SelectedBusStopService } from "../services/selected-bus-stop.service";

@Component({
  selector: "app-list-of-buses",
  templateUrl: "./list-of-buses.component.html",
  styleUrls: ["./list-of-buses.component.scss"],
})
export class ListOfBusesComponent {
  @Input() busStops: busStopNames = [];

  constructor(
    private upperCaseBusStopsService: UpperCaseBusStopsService,
    private selectedBusStopService: SelectedBusStopService
  ) {}

  getUpperCaseNames(busStops: busStopNames) {
    return this.upperCaseBusStopsService.getUpperCaseNames(busStops);
  }

  selectBusStop(index: number, name: string) {
    this.selectedBusStopService.selectedBusStop = index;
  }

  ngOnInit() {
    this.busStops = Object.values(this.busStops);
  }
}
