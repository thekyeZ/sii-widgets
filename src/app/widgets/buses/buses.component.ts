import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { busStopId, busStopName } from "./interfaces-buses/busStop";

@Component({
  selector: "app-buses",
  templateUrl: "./buses.component.html",
  styleUrls: ["./buses.component.scss"],
})
export class BusesComponent implements OnInit {
  selectedBusStop: number = 2;
  busStops: busStopName[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.requestBusStops();
  }

  requestBusStops() {
    this.http
      .get<busStopName[]>(
        "https://poland-public-transport.konhi.workers.dev/v1/zielonagora/mzk/stops"
      )
      .subscribe((busStops) => (this.busStops = busStops));
  }

  incomingBuses = [
    "44 - 13min",
    "52 - 20min",
    "55 - 30min",
    "4 - 40min",
    "12 - 45min",
  ];
}
