import { Component } from "@angular/core";
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
  busStopSelected: boolean = false;

  constructor(
    private busArrivalsService: BusArrivalsService,
    private selectedBusStopService: SelectedBusStopService
  ) {}

  ngOnInit() {
    this.selectedBusStopService.selectedBusStop.subscribe((id) => {
      if (id) {
        this.busStopSelected = true;
        this.busArrivalsService.fetchBusArrivals(id).subscribe((data) => {
          this.busArrivalsData = Object.values(data);
        });
      } else {
        this.busStopSelected = false;
        this.busArrivalsData = [];
      }
    });
  }
}
