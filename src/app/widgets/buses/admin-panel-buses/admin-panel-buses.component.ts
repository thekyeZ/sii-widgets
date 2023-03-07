import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-panel-buses",
  templateUrl: "./admin-panel-buses.component.html",
  styleUrls: ["./admin-panel-buses.component.scss"],
})
export class AdminPanelBusesComponent {
  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    console.log(form);
    this.router.navigate([""]);
  }
}

