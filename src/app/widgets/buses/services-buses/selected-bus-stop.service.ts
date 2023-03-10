import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SelectedBusStopService {
  selectedBusStop = new BehaviorSubject<string>("");
  selectedBusStopName = new BehaviorSubject<string>("Choose your bus stop");

  updateSelectedBusStop(id: string): void {
    this.selectedBusStop.next(id);
    
  }
}
