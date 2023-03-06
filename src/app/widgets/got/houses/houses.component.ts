import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-houses",
  templateUrl: "./houses.component.html",
  styleUrls: ["./houses.component.scss"],
})
export class HousesComponent {
  constructor(private router: Router) {}
}
