import { Component, Input, Output, OnInit } from "@angular/core";
import { Character } from "../interfaces/Character";
import { SelectedCharacterIdService } from "../services/selected-character-id.service";
@Component({
  selector: "app-list-of-characters",
  templateUrl: "./list-of-characters.component.html",
  styleUrls: ["./list-of-characters.component.scss"],
})
export class ListOfCharactersComponent {
  //selectedCharacterId!: number;
  @Input() characters: Character[] = [];
  isFavourite = false;
  favCharacter!: Character;

  constructor(private selectedCharacterService: SelectedCharacterIdService) {}
  // ngOnInit(): void {
  //   this.selectedCharacterService.selectedCharacterId.subscribe(
  //     (selectedCharacterFromService) =>
  //       (this.selectedCharacter = selectedCharacterFromService)
  //   );
  // }
  setSelectedCharacter(i: number) {
    this.selectedCharacterService.selectedCharacterId.next(i);
    console.log(this.selectedCharacterService.selectedCharacterId.value);
  }

  // listingEntryClicked(character: Character) {
  //   console.log("Details from listing: ", character);
  // }
  listingEntryFavClicked(character: Character) {
    //console.log("Favourite character: ", character);
    this.favCharacter = character;
    console.log("character: ", this.favCharacter);
  }
}
