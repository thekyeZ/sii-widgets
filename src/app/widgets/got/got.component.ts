//import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Character } from "./interfaces/Character";
//import { SelectedCharacterIdService } from "./services/selected-character-id.service";
import { CharactersService } from "./services/characters.service";
@Component({
  selector: "app-got",
  templateUrl: "./got.component.html",
  styleUrls: ["./got.component.scss"],
  providers: [CharactersService],
})
export class GotComponent implements OnInit {
  listOfCharacters: Character[] = [];
  constructor(
    private charactersService: CharactersService // private http: HttpClient
  ) {}
  // ngOnInit(): void {
  //   this.http
  //     .get<any>("https://www.anapioficeandfire.com/api/characters")
  //     .subscribe((results) => (this.listOfCharacters = results));

  // }
  ngOnInit(): void {
    this.charactersService
      .fetchCharacters()
      .subscribe((results) => (this.listOfCharacters = results));
    //this.listOfCharacters = this.charactersService.getListOfCharacters;
  }

  currentTitle = "Characters";
  //listOfCharacters: Character[] = [
  //   { name: "aaaaa", aliases: ["aaaaa"], gender: "male" },
  //   { name: "bbbbb", aliases: ["bbbbb"], gender: "male" },
  //   { name: "ccccc", aliases: ["ccccc"], gender: "female" },
  //   { name: "dddddd", aliases: ["dddddd"], gender: "male" },
  //   { name: "eeeee", aliases: ["eeeee"], gender: "male" },
  // ];
}
