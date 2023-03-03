import { Component, Input } from "@angular/core";
import { SelectedBusStopService } from "../services-buses/selected-bus-stop.service";

@Component({
  selector: "app-admin-buses",
  templateUrl: "./admin-buses.component.html",
  styleUrls: ["./admin-buses.component.scss"],
})
export class AdminBusesComponent {
  selectedBusStopName: string = "";
  constructor(selectedBusStopService: SelectedBusStopService) {}
}

