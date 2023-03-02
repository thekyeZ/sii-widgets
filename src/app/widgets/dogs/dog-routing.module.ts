import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedsComponent } from './breeds/breeds.component';
import { CatAdminComponent } from './cat-admin/cat-admin.component';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [
    {path: '', redirectTo: 'cat/breeds', pathMatch: 'full'},
    {path: 'cat/catadmin',
    component: CatAdminComponent},
    {path: 'cat/breeds', component: BreedsComponent},
    {path: 'cat/gallery', component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DogRoutingModule { }
