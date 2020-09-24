import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Material } from '../models/material.model';
import { MaterialsService } from '../materials.service';

@Component({
  selector: 'app-material-detail',
  templateUrl: './material-detail.page.html',
  styleUrls: ['./material-detail.page.scss'],
})
export class MaterialDetailPage implements OnInit {

  public loadedMaterial: Material;

  constructor(private materialSrvc: MaterialsService, private route: ActivatedRoute, private navCrtl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('materialId')) {
        this.navCrtl.navigateBack('/material');
        return;
      }
      this.materialSrvc.getMaterial(paramMap.get('materialId')).subscribe(material => {
        this.loadedMaterial = material;
      })
    })
  }

}
