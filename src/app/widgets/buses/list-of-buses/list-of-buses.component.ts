import { Component, Input } from "@angular/core";
import { busStopNames } from "../model-buses/busStop.model";
import { SelectedBusStopService } from "../services-buses/selected-bus-stop.service";
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

  selectBusStop(id: string): void {
    this.selectedBusStopService.updateSelectedBusStop(id);
  }

  constructor(
    private upperCaseBusStopsService: UpperCaseBusStopsService,
    private selectedBusStopService: SelectedBusStopService
  ) {}

  ngOnInit() {
    this.busStops = Object.values(this.busStops);
  }
}
