import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedDetailsComponent } from './breeds/breed-description/breed-details/breed-details.component';
import { BreedsComponent } from './breeds/breeds.component';
import { CatAdminComponent } from './cat-admin/cat-admin.component';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [
  // {path: '', redirectTo: 'cat/breeds', pathMatch: 'full'},
  { path: '', component: BreedsComponent },
  { path: 'cat/catadmin',component: CatAdminComponent},
  { path: 'cat/breeds', component: BreedsComponent },
  { path: 'cat/gallery', component: GalleryComponent },
  { path: 'cat/breeds/:id', component: BreedDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DogRoutingModule { }
