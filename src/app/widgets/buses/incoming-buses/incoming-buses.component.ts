import { Component, Input } from "@angular/core";
import { BusArrivalsService } from "../services-buses/bus-arrivals.service";
import { busArrival } from "../chosen-bus-stop/model-buses/busStop.model";

@Component({
  selector: "app-incoming-buses",
  templateUrl: "./incoming-buses.component.html",
  styleUrls: ["./incoming-buses.component.scss"],
})
export class IncomingBusesComponent {
  busArrivalsData: busArrival[] = [];

  @Input() id: string = "219";

  constructor(private busArrivalsService: BusArrivalsService) {}

  ngOnInit() {
    this.busArrivalsService.getBusArrivals(this.id).subscribe((data) => {
      // extract the values from the busArrivals object and store them in an array
      this.busArrivalsData = Object.values(data);
    });
  }
}
