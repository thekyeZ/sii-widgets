import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { busStopNames } from "../model-buses/busStop.model";
import { FetchBusStopsService } from "../services-buses/fetch-bus-stops.service";

@Component({
  selector: "app-panel-buses",
  templateUrl: "./panel-buses.component.html",
  styleUrls: ["./panel-buses.component.scss"],
})
export class PanelBusesComponent {
  busStops!: busStopNames;

  constructor(
    private fetchBusStopsService: FetchBusStopsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchBusStopsService
      .fetchBusStops()
      .subscribe((busStops) => (this.busStops = Object.values(busStops)));
  }
  onOpenSettings() {
    this.router.navigate(["admin/buses"]);
  }
}

