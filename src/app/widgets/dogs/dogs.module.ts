import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './dogs.component';
import { BreedsComponent } from './breeds/breeds.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BreedDescriptionComponent } from './breeds/breed-description/breed-description.component';
import { BreedListComponent } from './breeds/breed-list/breed-list.component';
import { HeaderCatsComponent } from './header-cats/header-cats.component';
import { FavoritesCatsComponent } from './favorites-cats/favorites-cats.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DogsComponent,
    BreedsComponent,
    GalleryComponent,
    BreedDescriptionComponent,
    BreedListComponent,
    HeaderCatsComponent,
    FavoritesCatsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    DogsComponent
  ]
})
export class DogsModule { }
