import { Component, Input } from "@angular/core";

@Component({
  selector: "app-incoming-busses",
  templateUrl: "./incoming-busses.component.html",
  styleUrls: ["./incoming-busses.component.scss"],
})
export class IncomingBussesComponent {
  busStop = "Batorego/Dworcowa";

  @Input() incomingBusses: string[] = [];
}

