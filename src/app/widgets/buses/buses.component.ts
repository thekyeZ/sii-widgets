import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { busStop } from "./interfaces/busStop";

@Component({
  selector: "app-buses",
  templateUrl: "./buses.component.html",
  styleUrls: ["./buses.component.scss"],
})
export class BusesComponent implements OnInit {
  busStops: busStop[] = [];
  chosenBusStop: string = "Wybierz swój przystanek 🤠";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.requestBusStops();
  }

  requestBusStops() {
    this.http
      .get<busStop[]>(
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
