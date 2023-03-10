import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { House } from "../interfaces/House";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HousesService implements OnInit {
  constructor(private http: HttpClient) {}

  requestCharacters(): Observable<House[]> {
    return this.http.get<House[]>(
      "https://www.anapioficeandfire.com/api/houses"
    );
  }
  ngOnInit(): void {
    this.requestCharacters();
  }
}
