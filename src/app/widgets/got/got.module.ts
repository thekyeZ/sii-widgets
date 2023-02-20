import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GotComponent } from "./got.component";
import { ListOfCharactersComponent } from "./list-of-characters/list-of-characters.component";
import { HeaderListingComponent } from "./header-listing/header-listing.component";
import { CharacterComponent } from "./character/character.component";
import { HttpClientModule } from "@angular/common/http";
import { CharacterDetailsComponent } from './character-details/character-details.component';
@NgModule({
  declarations: [
    GotComponent,
    ListOfCharactersComponent,
    HeaderListingComponent,
    CharacterComponent,
    CharacterDetailsComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [GotComponent],
})
export class GotModule {}
