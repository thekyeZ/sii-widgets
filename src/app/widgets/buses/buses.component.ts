import { Component, OnInit } from "@angular/core";
import { BusStopsService } from "./services-buses/bus-stops.service";
import { busArrivals, busStopNames } from "./model-buses/busStop.model";
import { SelectedBusStopService } from "./services-buses/selected-bus-stop.service";
@Component({
  selector: "app-buses",
  templateUrl: "./buses.component.html",
  styleUrls: ["./buses.component.scss"],
})
export class BusesComponent implements OnInit {
  busStops!: busStopNames;
  busArrivals!: busArrivals;

  constructor(
    private busStopsService: BusStopsService,
    private selectedBusStopService: SelectedBusStopService
  ) {}

  ngOnInit(): void {
    this.busStopsService
      .getBusStops()
      .subscribe((busStops) => (this.busStops = busStops));
  }
}
