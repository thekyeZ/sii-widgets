import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { busStopName } from "../model-buses/busStop.model";

@Injectable({
  providedIn: "root",
})
export class SelectedBusStopService {
  selectedBusStop = new BehaviorSubject<string>('75');

  updateSelectedBusStop(id: string): void {
    this.selectedBusStop.next(id);
  }
}
