import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BusStopNames } from "../model-buses/BusStop.model";

@Injectable({
  providedIn: "root",
})
export class FetchBusStopsService {
  constructor(private http: HttpClient) {}

  fetchBusStops(): Observable<BusStopNames> {
    return this.http.get<BusStopNames>(
      "https://poland-public-transport.konhi.workers.dev/v1/zielonagora/mzk/stops"
    );
  }
}
