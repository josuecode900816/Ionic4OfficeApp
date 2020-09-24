import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterialDetailPageRoutingModule } from './material-detail-routing.module';

import { MaterialDetailPage } from './material-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialDetailPageRoutingModule
  ],
  declarations: [MaterialDetailPage]
})
export class MaterialDetailPageModule {}
