import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
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
}
