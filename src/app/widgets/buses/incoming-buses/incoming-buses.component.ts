import { Component, Input } from "@angular/core";

@Component({
  selector: "app-incoming-buses",
  templateUrl: "./incoming-buses.component.html",
  styleUrls: ["./incoming-buses.component.scss"],
})
export class IncomingBusesComponent {
  @Input() incomingBuses: string[] = [];
}

