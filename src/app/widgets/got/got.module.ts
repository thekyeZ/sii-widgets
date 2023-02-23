import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GotComponent } from "./got.component";
import { ListOfCharactersComponent } from "./list-of-characters/list-of-characters.component";
import { HeaderComponent } from "./header/header.component";
import { CharacterComponent } from "./character/character.component";
import { HttpClientModule } from "@angular/common/http";
import { CharacterDetailsComponent } from "./character-details/character-details.component";
import { SelectedCharacterComponent } from "./selected-character/selected-character.component";
//import { CharacterService } from "./character.service";
@NgModule({
  declarations: [
    GotComponent,
    ListOfCharactersComponent,
    HeaderComponent,
    CharacterComponent,
    CharacterDetailsComponent,
    SelectedCharacterComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [GotComponent],
  //providers: [CharacterService],
})
export class GotModule {}
