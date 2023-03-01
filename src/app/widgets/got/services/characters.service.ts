import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Character } from "../interfaces/Character";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CharactersService implements OnInit {
  //getListOfCharacters: Character[] = [];
  constructor(private http: HttpClient) {}

  requestCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(
      "https://www.anapioficeandfire.com/api/characters"
    );
    // .subscribe((results) => (this.getListOfCharacters = results));
  }
  ngOnInit(): void {
    this.requestCharacters();
    //console.log(this.getListOfCharacters);
  }
}
