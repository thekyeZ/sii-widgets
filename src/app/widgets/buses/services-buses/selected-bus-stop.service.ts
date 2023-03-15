import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LocalBusStorageService } from "./local-bus-storage.service";

@Injectable({
  providedIn: "root",
})
export class SelectedBusStopService {
  
  constructor(private localBusStorageService: LocalBusStorageService) {}

  selectedBusStop = new BehaviorSubject<string>(
    this.localBusStorageService.getData("selectedBusStop") || ""
  );

  updateSelectedBusStop(id: string): void {
    this.selectedBusStop.next(id);
  }
}
