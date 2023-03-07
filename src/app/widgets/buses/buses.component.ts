import { Component, OnInit } from "@angular/core";
import { BusStopsService } from "./services-buses/bus-stops.service";
import { busArrivals, busStopNames } from "./model-buses/busStop.model";
import { SelectedBusStopService } from "./services-buses/selected-bus-stop.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-buses",
  templateUrl: "./buses.component.html",
  styleUrls: ["./buses.component.scss"],
})
export class BusesComponent {

}
