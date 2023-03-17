import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { HousesService } from "../services/houses.service";
import { House } from "../interfaces/House";
@Component({
  selector: "app-houses",
  templateUrl: "./houses.component.html",
  styleUrls: ["./houses.component.scss"],
})
export class HousesComponent implements OnInit, OnDestroy {
  listOfHouses: House[] = [];
  constructor(private router: Router, private housesService: HousesService) {}
  ngOnInit(): void {
    this.housesService
      .requestCharacters()
      .subscribe((results) => (this.listOfHouses = results));
  }
  ngOnDestroy(): void {}
}
