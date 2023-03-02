import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { busArrivals } from "../model-buses/busStop.model";

@Injectable({
  providedIn: "root",
})
export class BusArrivalsService {
  constructor(private http: HttpClient) {}

  getBusArrivals(id: string): Observable<busArrivals> {
    if (id !== "") {
      return this.http.get<busArrivals>(
        `https://poland-public-transport.konhi.workers.dev/v1/zielonagora/mzk/stops/${id}/departures`
      );
    } else {
      return of({});
    }
  }
}
