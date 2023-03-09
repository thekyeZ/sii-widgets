import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
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

  onSubmit(form: NgForm) {
    const defaultBusStop = form.value.defaultBusStop;
    this.selectedBusStopService.updateSelectedBusStop(defaultBusStop);
    this.router.navigate([""]);
  }
}

