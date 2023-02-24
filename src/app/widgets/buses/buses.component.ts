import { Component, OnInit } from "@angular/core";
import { BusStopsService } from "./bus-stops.service";
import { busArrivals, busStopName } from "./interfaces-buses/busStop";
@Component({
  selector: "app-buses",
  templateUrl: "./buses.component.html",
  styleUrls: ["./buses.component.scss"],
})
export class BusesComponent implements OnInit {
  selectedBusStop: number = 2;
  busStops: busStopName[] = [];
  busArrivals: busArrivals[] = [];

  constructor(private busStopsService: BusStopsService) {}

  ngOnInit(): void {
    this.busStopsService
      .getBusStops()
      .subscribe((busStops) => (this.busStops = busStops));
  }
}
