import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Character } from "../../interfaces/Character";

@Component({
  selector: "app-character",
  templateUrl: "./character.component.html",
  styleUrls: ["./character.component.scss"],
})
export class CharacterComponent {
  @Input() character!: Character;
  @Output() detailBtnClicked = new EventEmitter<Character>();
  @Output() favouriteBtnClicked = new EventEmitter<Character>();

  //isFavourite = false;
  imgSrc = "assets/icons/heart.svg";
  imgSrcFilled = "assets/icons/heart-filled.svg";

  buttonClick(character: Character) {
    this.detailBtnClicked.emit(character);
    // console.log(character);
  }
  // favButtonClick(character: Character) {
  //   this.favouriteBtnClicked.emit(character);
  //   this.character.isFavourite = !this.character.isFavourite;
  // }
}
