import { Component, OnInit, OnDestroy } from "@angular/core";
import { SelectedCharacterIdService } from "../services/selected-character-id.service";
import { CharactersService } from "../services/characters.service";
import { Character } from "../interfaces/Character";
@Component({
  selector: "app-selected-character",
  templateUrl: "./selected-character.component.html",
  styleUrls: ["./selected-character.component.scss"],
})
export class SelectedCharacterComponent implements OnInit, OnDestroy {
  selectedCharacter!: number;
  listOfCharacters: Character[] = [];

  constructor(
    private selectedCharacterService: SelectedCharacterIdService,
    private charactersService: CharactersService
  ) {}

  ngOnInit(): void {
    this.selectedCharacterService.selectedCharacterId.subscribe(
      (selectedCharacterFromService: number) => {
        this.selectedCharacter = selectedCharacterFromService;
        console.log("Subscribe ", this.selectedCharacter);
      }
    );

    this.charactersService
      .requestCharacters()
      .subscribe((results) => (this.listOfCharacters = results));
  }
  ngOnDestroy(): void {}
}
