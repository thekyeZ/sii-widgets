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
  @Input() selectedBusStopName: string = "";

  constructor(private selectedBusStopService: SelectedBusStopService) {
    const selectedBusStopId = localStorage.getItem("selectedBusStopId");
    if (selectedBusStopId) {
      const selectedBusStop = Object.values(this.busStops).find(
        (stop) => stop.id === selectedBusStopId
      );
      if (selectedBusStop) {
        this.selectedBusStopName = selectedBusStop.name;
        this.selectedBusStopService.updateSelectedBusStop(selectedBusStopId);
      } else {
        this.selectedBusStopName = "Choose your bus stop";
      }
    }
  }

  ngOnInit() {
    const selectedBusStopId = localStorage.getItem("selectedBusStopId");
    if (selectedBusStopId) {
      this.selectedBusStopService.updateSelectedBusStop(selectedBusStopId);
    }
    this.selectedBusStopService.selectedBusStop.subscribe((id) => {
      const selectedBusStop = Object.values(this.busStops).find(
        (stop) => stop.id === id
      );
      if (selectedBusStop) {
        this.selectedBusStopName = selectedBusStop.name;
        localStorage.setItem("selectedBusStopId", id);
      }
    });
  }
}
