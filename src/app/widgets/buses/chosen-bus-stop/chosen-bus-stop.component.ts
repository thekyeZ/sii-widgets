import { Component, Input } from "@angular/core";
import { busStopNames } from "../model-buses/busStop.model";
import { SelectedBusStopService } from "../services-buses/selected-bus-stop.service";

@Component({
  selector: "app-chosen-bus-stop",
  templateUrl: "./chosen-bus-stop.component.html",
  styleUrls: ["./chosen-bus-stop.component.scss"],
})
export class ChosenBusStopComponent {
  @Input() busStops: busStopNames = [];
  selectedBusStopName: string = "";

  constructor(private selectedBusStopService: SelectedBusStopService) {
    if (this.busStops && this.busStops.length > 0) {
      this.selectedBusStopName = this.busStops[0].name;
      this.selectedBusStopService.updateSelectedBusStop(this.busStops[0].id);
    } else {
      this.selectedBusStopName = "Wybierz swój przystanek";
    }
  }

  ngOnInit() {
    this.selectedBusStopService.selectedBusStop.subscribe((id) => {
      if (this.busStops) {
        const selectedBusStop = Object.values(this.busStops).find(
          (stop) => stop.id === id
        );
        if (selectedBusStop) {
          this.selectedBusStopName = selectedBusStop.name;
        }
      }
    });
  }
}