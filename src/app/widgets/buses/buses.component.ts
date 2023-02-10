import { Component } from "@angular/core";

@Component({
  selector: "app-buses",
  templateUrl: "./buses.component.html",
  styleUrls: ["./buses.component.scss"],
})
export class BusesComponent {
  chosenBusStop = "Batorego/Dworcowa"
  incomingBuses = [
    "44 - 13min",
    "52 - 20min",
    "55 - 30min",
    "4 - 40min",
    "12 - 45min",
  ];
  
  busStops = [
    "1 Maja",
    "Agrestowa",
    "Amfiteatr",
    "Anny Jagiellonki",
    "Barcikowice",
  ];
}
