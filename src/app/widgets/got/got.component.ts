import { Component, OnInit } from "@angular/core";
// import { Character } from "./interfaces/Character";
// import { CharactersService } from "./services/characters.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-got",
  templateUrl: "./got.component.html",
  styleUrls: ["./got.component.scss"],
})
export class GotComponent {
  // listOfCharacters: Character[] = [];
  constructor(
    // private charactersService: CharactersService,
    private router: Router
  ) {}

  // ngOnInit(): void {
  //   this.charactersService
  //     .requestCharacters()
  //     .subscribe((results) => (this.listOfCharacters = results));
  // }
  navigateToAdmin() {
    this.router.navigate(["admin/got"]);
  }
  // currentTitle = "Game of Thrones!";
}
