import { Component, Input, Output } from "@angular/core";
import { Character } from "../interfaces/Character";
@Component({
  selector: "app-list-of-characters",
  templateUrl: "./list-of-characters.component.html",
  styleUrls: ["./list-of-characters.component.scss"],
})
export class ListOfCharactersComponent {
  @Input() characters: Character[] = [];
  isFavourite = false;
  favCharacter!: Character;
  //to character-details
  // @Output() characterDetails!: Character;

  listingEntryClicked(character: Character) {
    console.log("Details from listing: ", character);
    //to character-details
    // this.characterDetails = character;
    // console.log("Character details: ", this.characterDetails);
  }
  listingEntryFavClicked(character: Character) {
    //console.log("Favourite character: ", character);
    this.favCharacter = character;
    console.log("character: ", this.favCharacter);
  }
}
