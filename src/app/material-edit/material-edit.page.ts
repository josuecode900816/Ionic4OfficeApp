import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MaterialsService } from '../materials.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Material } from '../models/material.model';

@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.page.html',
  styleUrls: ['./material-edit.page.scss'],
})
export class MaterialEditPage implements OnInit {
  
  form:FormGroup;
  public loadedMaterial: Material;

  constructor(private materialSrvc: MaterialsService, private route: ActivatedRoute, private navCrtl: NavController,
    private toastCtrl: ToastController, private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('materialId')) {
        this.navCrtl.navigateBack('/material');
        return;
      }
      this.materialSrvc.getMaterial(paramMap.get('materialId')).subscribe(material => {
        this.loadedMaterial = material;

        this.form= new FormGroup({
            title: new FormControl(this.loadedMaterial.name, {
              updateOn: 'change',
              validators:[Validators.required]
            }),
            description: new FormControl(this.loadedMaterial.description, {
              updateOn: 'change',
              validators:[Validators.required, Validators.maxLength(50)]
            }),
            quantity: new FormControl(this.loadedMaterial.quantity, {
              updateOn: 'change',
              validators:[Validators.required, Validators.min(1)]
            })
        });
      });
    });
  }

  async editMaterial(){
     this.materialSrvc.updateMaterial(this.loadedMaterial.id, this.form.value.title, this.form.value.description, this.form.value.quantity )
     .subscribe(()=>{
          this.toastCtrl.create({
            animated:true,
            duration:2000,
            position: 'top',
            message:"El elemento se editó correctamente"          
          }).then(toastEl =>{
             toastEl.present();
             this.router.navigate(['/materials']);
          });
     });
  }

}
