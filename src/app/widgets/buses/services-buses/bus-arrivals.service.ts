import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { busArrivals } from "../chosen-bus-stop/model-buses/busStop.model";

@Injectable({
  providedIn: "root",
})
export class BusArrivalsService {
  constructor(private http: HttpClient) {}

  getBusArrivals(id: string): Observable<busArrivals> {
    return this.http.get<busArrivals>(
      `https://poland-public-transport.konhi.workers.dev/v1/zielonagora/mzk/stops/${id}/departures`
    );
  }
}
