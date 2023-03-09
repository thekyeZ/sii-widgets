import { Component, Input } from "@angular/core";
import { BusArrivalsService } from "../../services-buses/bus-arrivals.service";
import { busArrival } from "../../model-buses/busStop.model";
import { SelectedBusStopService } from "../../services-buses/selected-bus-stop.service";

@Component({
  selector: "app-incoming-buses",
  templateUrl: "./incoming-buses.component.html",
  styleUrls: ["./incoming-buses.component.scss"],
})
export class IncomingBusesComponent {
  busArrivalsData: busArrival[] = [];

  constructor(
    private busArrivalsService: BusArrivalsService,
    private selectedBusStopService: SelectedBusStopService
  ) {}

  ngOnInit() {
    this.selectedBusStopService.selectedBusStop.subscribe((id) => {
      this.busArrivalsService.fetchBusArrivals(id).subscribe((data) => {
        this.busArrivalsData = Object.values(data);
      });
    });
  }
}
