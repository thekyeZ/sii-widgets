import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { busStopNames } from "../model-buses/busStop.model";
import { FetchBusStopsService } from "../services-buses/fetch-bus-stops.service";
import { SelectedBusStopService } from "../services-buses/selected-bus-stop.service";

@Component({
  selector: "app-admin-panel-buses",
  templateUrl: "./admin-panel-buses.component.html",
  styleUrls: ["./admin-panel-buses.component.scss"],
})
export class AdminPanelBusesComponent implements OnInit {
  busStops: busStopNames = [];
  selectedBusStopId!: string;

  constructor(
    private router: Router,
    private fetchBusStopsService: FetchBusStopsService,
    private selectedBusStopService: SelectedBusStopService
  ) {}

  ngOnInit(): void {
    this.fetchBusStopsService
      .fetchBusStops()
      .subscribe((busStops) => (this.busStops = Object.values(busStops)));
    this.selectedBusStopService.selectedBusStop.subscribe(
      (id) => (this.selectedBusStopId = id)
    );
  }

  onSelectBusStop(event: any) {
    const id = event.target.value;
    this.selectedBusStopService.updateSelectedBusStop(id);
  }

  onSubmit() {
    this.router.navigate([""]);
  }
}
