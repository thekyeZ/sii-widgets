import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Character } from "../interfaces/Character";
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CharactersService implements OnInit {
  constructor(private http: HttpClient) {}

  requestCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(
      "https://www.anapioficeandfire.com/api/characters"
    );
    // .pipe(
    //   map((charactersResponse) => {
    //     return { ...charactersResponse, isFavourite: false };
    //   })
    // );
  }
  ngOnInit(): void {
    this.requestCharacters();
  }
}
