import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { busStopNames } from "../model-buses/busStop.model";

@Injectable({
  providedIn: "root",
})
export class BusStopsService {
  constructor(private http: HttpClient) {}

  fetchBusStops(): Observable<busStopNames> {
    return this.http.get<busStopNames>(
      "https://poland-public-transport.konhi.workers.dev/v1/zielonagora/mzk/stops"
    );
  }
}
