import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-home-got",
  templateUrl: "./home-got.component.html",
  styleUrls: ["./home-got.component.scss"],
})
export class HomeGotComponent {
  constructor(private router: Router) {}
  navigateToAdmin() {
    this.router.navigate(["admin/got"]);
  }
  currentTitle = "Game of Thrones!";
}
