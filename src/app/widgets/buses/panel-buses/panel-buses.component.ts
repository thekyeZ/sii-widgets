import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BusStopNames } from "../model-buses/BusStop.model";
import { FetchBusStopsService } from "../services-buses/fetch-bus-stops.service";

@Component({
  selector: "app-panel-buses",
  templateUrl: "./panel-buses.component.html",
  styleUrls: ["./panel-buses.component.scss"],
})
export class PanelBusesComponent {
  busStops!: BusStopNames;

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

