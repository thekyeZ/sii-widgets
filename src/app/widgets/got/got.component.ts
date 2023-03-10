import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-got",
  templateUrl: "./got.component.html",
  styleUrls: ["./got.component.scss"],
})
export class GotComponent {
  constructor(private router: Router) {}
}
