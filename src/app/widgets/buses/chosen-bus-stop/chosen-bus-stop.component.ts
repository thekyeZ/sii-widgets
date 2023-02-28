import { Component, EventEmitter, Input, Output } from "@angular/core";
import { busStopNames } from "../model-buses/busStop.model";
import { SelectedBusStopService } from "../services-buses/selected-bus-stop.service";
import { UpperCaseBusStopsService } from "../services-buses/upper-case-bus-stops.service";

@Component({
  selector: "app-chosen-bus-stop",
  templateUrl: "./chosen-bus-stop.component.html",
  styleUrls: ["./chosen-bus-stop.component.scss"],
})
export class ChosenBusStopComponent {
  @Input() busStops: busStopNames = [];
  @Input() selectedBusStop!: number;

  constructor(private selectedBusStopService: SelectedBusStopService) {}

  ngOnInit() {}
}
