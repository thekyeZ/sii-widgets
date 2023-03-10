import { Component, Input } from "@angular/core";
import { House } from "../../interfaces/House";
@Component({
  selector: "app-list-of-houses",
  templateUrl: "./list-of-houses.component.html",
  styleUrls: ["./list-of-houses.component.scss"],
})
export class ListOfHousesComponent {
  @Input() houses: House[] = [];
}
