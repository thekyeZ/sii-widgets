import { Component, EventEmitter, Input, Output } from "@angular/core";
import { busStopName } from "../interfaces-buses/busStop";

@Component({
  selector: "app-chosen-bus-stop",
  templateUrl: "./chosen-bus-stop.component.html",
  styleUrls: ["./chosen-bus-stop.component.scss"],
})
export class ChosenBusStopComponent {
  @Input() busStops: busStopName[] = [];
  @Input() selectedBusStop: number = 0;
}
