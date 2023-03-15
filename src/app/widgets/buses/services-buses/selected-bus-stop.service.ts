import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SelectedBusStopService {
  
  selectedBusStop = new BehaviorSubject<string>(
    localStorage.getItem("selectedBusStop") || ""
  );

  updateSelectedBusStop(id: string): void {
    this.selectedBusStop.next(id);
  }
}
