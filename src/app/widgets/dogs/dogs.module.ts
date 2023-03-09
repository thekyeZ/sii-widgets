import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './dogs.component';
import { BreedsComponent } from './breeds/breeds.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BreedDescriptionComponent } from './breeds/breed-description/breed-description.component';
import { BreedListComponent } from './breeds/breed-list/breed-list.component';
import { HeaderCatsComponent } from './header-cats/header-cats.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListItemComponent } from './breeds/breed-list/list-item/list-item.component';
import { CatAdminComponent } from './cat-admin/cat-admin.component';
import { DogRoutingModule } from './dog-routing.module';
import { BreedDetailsComponent } from './breeds/breed-description/breed-details/breed-details.component';

@NgModule({
  declarations: [
    DogsComponent,
    BreedsComponent,
    GalleryComponent,
    BreedDescriptionComponent,
    BreedListComponent,
    HeaderCatsComponent,
    ListItemComponent,
    CatAdminComponent,
    BreedDetailsComponent,

  ],
  imports: [
    CommonModule,
    DogRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DogsComponent
  ]
})
export class DogsModule { }
