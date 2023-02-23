import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Character } from "../interfaces/Character";

@Injectable({
  providedIn: "root",
})
export class CharactersService implements OnInit {
  //getListOfCharacters: Character[] = [];
  constructor(private http: HttpClient) {}

  fetchCharacters() {
    return this.http.get<Character[]>(
      "https://www.anapioficeandfire.com/api/characters"
    );
    // .subscribe((results) => (this.getListOfCharacters = results));
  }
  ngOnInit(): void {
    this.fetchCharacters();
    //console.log(this.getListOfCharacters);
  }
}
