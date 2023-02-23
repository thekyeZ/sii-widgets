import { Component, OnInit } from "@angular/core";
import { SelectedCharacterIdService } from "../services/selected-character-id.service";
import { CharactersService } from "../services/characters.service";
import { Character } from "../interfaces/Character";
@Component({
  selector: "app-selected-character",
  templateUrl: "./selected-character.component.html",
  styleUrls: ["./selected-character.component.scss"],
  providers: [SelectedCharacterIdService, CharactersService],
})
export class SelectedCharacterComponent implements OnInit {
  selectedCharacter!: number;
  listOfCharacters: Character[] = [];

  constructor(
    private selectedCharacterService: SelectedCharacterIdService,
    private charactersService: CharactersService
  ) {}

  ngOnInit(): void {
    this.selectedCharacter = this.selectedCharacterService.selectedCharacterId;
    this.charactersService
      .fetchCharacters()
      .subscribe((results) => (this.listOfCharacters = results));
  }
}
