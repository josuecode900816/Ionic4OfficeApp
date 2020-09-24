import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialEditPage } from './material-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MaterialEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialEditPageRoutingModule {}
