import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SelectedBusStopService {
  selectedBusStop = new BehaviorSubject(0);
}
