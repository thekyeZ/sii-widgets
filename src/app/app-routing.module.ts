import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatAdminComponent } from './widgets/dogs/cat-admin/cat-admin.component';

const routes: Routes = [
  // { path: 'catadmin',
  //   component: CatAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
