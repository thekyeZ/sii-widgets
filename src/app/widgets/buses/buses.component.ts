import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { busStopName } from "./interfaces/busStop";

@Component({
  selector: "app-buses",
  templateUrl: "./buses.component.html",
  styleUrls: ["./buses.component.scss"],
})
export class BusesComponent implements OnInit {
  busStops: busStopName[] = [];
  chosenBusStop: string = "";

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

  onBusStopSelected(busStopName: string) {
    this.chosenBusStop = busStopName;
  }

  incomingBuses = [
    "44 - 13min",
    "52 - 20min",
    "55 - 30min",
    "4 - 40min",
    "12 - 45min",
  ];
}
