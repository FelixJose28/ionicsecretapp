import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MymodelPage } from './mymodel.page';

describe('MymodelPage', () => {
  let component: MymodelPage;
  let fixture: ComponentFixture<MymodelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymodelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MymodelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
