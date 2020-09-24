import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterialEditPageRoutingModule } from './material-edit-routing.module';

import { MaterialEditPage } from './material-edit.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    MaterialEditPageRoutingModule
  ],
  declarations: [MaterialEditPage]
})
export class MaterialEditPageModule {}
