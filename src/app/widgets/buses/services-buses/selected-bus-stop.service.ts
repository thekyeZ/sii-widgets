import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { busStopName } from "../model-buses/busStop.model";

@Injectable({
  providedIn: "root",
})
export class SelectedBusStopService {
  localStorageKey = "selectedBusStop";
  selectedBusStop = new BehaviorSubject<string>(
    localStorage.getItem(this.localStorageKey) || ""
  );

  updateSelectedBusStop(id: string): void {
    this.selectedBusStop.next(id);
    localStorage.setItem(this.localStorageKey, id);
  }
}
