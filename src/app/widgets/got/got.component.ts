import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Character } from "./interfaces/Character";

@Component({
  selector: "app-got",
  templateUrl: "./got.component.html",
  styleUrls: ["./got.component.scss"],
})
export class GotComponent implements OnInit {
  listOfCharacters: Character[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get<any>("https://www.anapioficeandfire.com/api/characters")
      .subscribe((results) => (this.listOfCharacters = results));
  }

  currentTitle = "Characters";
  //listOfCharacters: Character[] = [
  //   { name: "aaaaa", aliases: ["aaaaa"], gender: "male" },
  //   { name: "bbbbb", aliases: ["bbbbb"], gender: "male" },
  //   { name: "ccccc", aliases: ["ccccc"], gender: "female" },
  //   { name: "dddddd", aliases: ["dddddd"], gender: "male" },
  //   { name: "eeeee", aliases: ["eeeee"], gender: "male" },
  // ];
  //listOfCharacters: any[] = ["aaaaa", "bbbbb", "ccccc", "dddddd", "eeeee"];
}
