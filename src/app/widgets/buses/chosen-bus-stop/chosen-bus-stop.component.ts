import { Component, EventEmitter, Input, Output } from "@angular/core";
import { busStopNames } from "../interfaces-buses/busStop";
import { SelectedBusStopService } from "../services/selected-bus-stop.service";
import { UpperCaseBusStopsService } from "../services/upper-case-bus-stops.service";

@Component({
  selector: "app-chosen-bus-stop",
  templateUrl: "./chosen-bus-stop.component.html",
  styleUrls: ["./chosen-bus-stop.component.scss"],
})
export class ChosenBusStopComponent {
  @Input() busStops: busStopNames = [];
  selectedBusStop: number = 0;

  constructor(
    private selectedBusStopService: SelectedBusStopService,
    private upperCaseBusStopsService: UpperCaseBusStopsService
  ) {}
  ngOnInit(): void {
    const upperCaseBusStops = this.upperCaseBusStopsService.getUpperCaseNames(
      this.busStops
    );
    this.selectedBusStop = this.selectedBusStopService.selectedBusStop;
    
    console.log(this.selectedBusStop);
  }
}
