import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaterialEditPage } from './material-edit.page';

describe('MaterialEditPage', () => {
  let component: MaterialEditPage;
  let fixture: ComponentFixture<MaterialEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
