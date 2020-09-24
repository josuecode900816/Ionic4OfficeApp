import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { Material } from './models/material.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {
  private materialList: Material[] = [
    new Material(
      'm1',
      'Pizarra',
      'Sirve para pintar',
      2,
      'https://http2.mlstatic.com/pizarra-blanca-60x80-borde-metalico-combo-mercadoenvios-D_NQ_NP_903062-MLA31050942428_062019-Q.jpg'
    ),
    new Material(
      'm2',
      'Mesa',
      'Mesa de trabajo individual moderna',
      10,
      'https://olut.barcelona/wp-content/uploads/2017/09/mesa-oficina-nordica-olut.jpg'
    ),
    new Material(
      'm3',
      'Silla',
      'Silla de oficina color oscuro acolchonada',
      15,
      'https://www.cashoffice.com/wp-content/uploads/2018/03/Silla-Oficina-Negra-32166BK-600x600.jpg'
    ),
    new Material(
      'm4',
      'Horno Eléctrico',
      'Horno para tostar y dorar alimentos',
      3,
      'https://d34zlyc2cp9zm7.cloudfront.net/products/2608c1ea25e3f043635e11b3e30544d2923e0a32a76e63c40998b5fdbf4e2db9.jpg_500'
    ),
    new Material(
      'm5',
      'Elementos cocina',
      'Juego de vaso, plato y cubiertos para los alimentos',
      25,
      'https://i.blogs.es/1fb94d/vajilla-cubiertos-sombra/450_1000.jpg'
    )    
  ];

  private _materials = new BehaviorSubject<Material[]>(this.materialList);

  constructor() {}

  get materials() {
    return this._materials.asObservable();
  }

  getMaterial(id: string) {
    return this._materials.pipe(
      map(materials => {
        return materials.find(p => p.id === id);
      })
    );
  }

  updateMaterial(
    materialId: string,
    title: string,
    description: string,
    numberEl: number
  ) {
    let updatedMaterials: Material[];
    return this.materials.pipe(
      take(1),
      tap(materials => {
        const updateMaterialIndex = materials.findIndex(
          ml => ml.id === materialId
        );
        updatedMaterials = [...materials];
        const oldMaterial = updatedMaterials[updateMaterialIndex];
        updatedMaterials[updateMaterialIndex] = new Material(
          oldMaterial.id,
          title,
          description,
          numberEl,
          oldMaterial.image
        );
        this._materials.next(updatedMaterials);
      })
    );
  }
}
