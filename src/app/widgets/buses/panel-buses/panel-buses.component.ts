import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { pipe } from "rxjs";
import { busStopNames } from "../model-buses/busStop.model";
import { BusStopsService } from "../services-buses/bus-stops.service";

@Component({
  selector: "app-panel-buses",
  templateUrl: "./panel-buses.component.html",
  styleUrls: ["./panel-buses.component.scss"],
})
export class PanelBusesComponent {
  busStops!: busStopNames;

  constructor(
    private busStopsService: BusStopsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.busStopsService
      .fetchBusStops()
      .subscribe((busStops) => (this.busStops = Object.values(busStops)));
  }
  onOpenSettings() {
    this.router.navigate(["admin/buses"]);
  }
}

