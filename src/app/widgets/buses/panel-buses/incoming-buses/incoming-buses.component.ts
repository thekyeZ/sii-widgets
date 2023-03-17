import { Component } from "@angular/core";
import { FetchBusArrivalsService } from "../../services-buses/fetch-bus-arrivals.service";
import { busArrival } from "../../model-buses/busStop.model";
import { SelectedBusStopService } from "../../services-buses/selected-bus-stop.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-incoming-buses",
  templateUrl: "./incoming-buses.component.html",
  styleUrls: ["./incoming-buses.component.scss"],
})
export class IncomingBusesComponent {
  busArrivalsData: busArrival[] = [];
  busStopSelected: boolean = false;
  selectBusArrivalsServiceSubscribe!: Subscription;
  fetchBusArrivalsServiceSubscribe!: Subscription;

  constructor(
    private fetchBusArrivalsService: FetchBusArrivalsService,
    private selectedBusStopService: SelectedBusStopService
  ) {}

  ngOnInit() {
    this.selectBusArrivalsServiceSubscribe = this.selectedBusStopService.selectedBusStop.subscribe((id) => {
      if (id !== "") {
        this.busStopSelected = true;
        this.fetchBusArrivalsServiceSubscribe = this.fetchBusArrivalsService.fetchBusArrivals(id).subscribe((data) => {
          this.busArrivalsData = Object.values(data);
        });
      } else {
        this.busStopSelected = false;
        this.busArrivalsData = [];
      }
    });
  }

  ngOnDestroy() {
    this.selectBusArrivalsServiceSubscribe.unsubscribe();
    this.fetchBusArrivalsServiceSubscribe.unsubscribe();
  }
}
