import { Component, Input } from "@angular/core";
import { busStopNames } from "../../model-buses/busStop.model";
import { SelectedBusStopService } from "../../services-buses/selected-bus-stop.service";

@Component({
  selector: "app-chosen-bus-stop",
  templateUrl: "./chosen-bus-stop.component.html",
  styleUrls: ["./chosen-bus-stop.component.scss"],
})
export class ChosenBusStopComponent {
  @Input() busStops: busStopNames = [];
  selectedBusStopName!: string;

  constructor(private selectedBusStopService: SelectedBusStopService) {}

  ngOnInit() {
    this.selectedBusStopService.selectedBusStop.subscribe((id) => {
      this.selectedBusStopName =
        Object.values(this.busStops || {}).find((busStop) => busStop.id === id)
          ?.name || "";
    });
  }
}
