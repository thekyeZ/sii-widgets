import { Component, OnInit } from "@angular/core";
import { Character } from "../interfaces/Character";
import { CharactersService } from "../services/characters.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"],
})
export class CharactersComponent implements OnInit {
  listOfCharacters: Character[] = [];
  constructor(
    private charactersService: CharactersService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.charactersService
      .requestCharacters()
      .subscribe((results) => (this.listOfCharacters = results));
  }
}
