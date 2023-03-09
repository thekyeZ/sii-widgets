import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { busStopNames } from "../model-buses/busStop.model";
import { SelectedBusStopService } from "../services-buses/selected-bus-stop.service";

@Component({
  selector: "app-admin-panel-buses",
  templateUrl: "./admin-panel-buses.component.html",
  styleUrls: ["./admin-panel-buses.component.scss"],
})
export class AdminPanelBusesComponent {
  defaultBusStop!: string;

  constructor(
    private router: Router,
    private selectedBusStopService: SelectedBusStopService
  ) {}

  onSubmit() {
    this.router.navigate([""]);
  }
}

