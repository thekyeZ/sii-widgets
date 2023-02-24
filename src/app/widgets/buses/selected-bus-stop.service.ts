import { Injectable } from "@angular/core";
import { busStopName } from "./interfaces-buses/busStop";

@Injectable({
  providedIn: "root",
})
export class SelectedBusStopService {
  selectedBusStop: number = 1;
}

