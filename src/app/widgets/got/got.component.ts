import { Component, OnInit } from "@angular/core";
import { Character } from "./interfaces/Character";
import { CharactersService } from "./services/characters.service";

@Component({
  selector: "app-got",
  templateUrl: "./got.component.html",
  styleUrls: ["./got.component.scss"],
})
export class GotComponent implements OnInit {
  listOfCharacters: Character[] = [];
  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService
      .requestCharacters()
      .subscribe((results) => (this.listOfCharacters = results));
  }

  currentTitle = "Characters";
}
