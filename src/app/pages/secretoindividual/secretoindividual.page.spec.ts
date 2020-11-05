import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecretoindividualPage } from './secretoindividual.page';

describe('SecretoindividualPage', () => {
  let component: SecretoindividualPage;
  let fixture: ComponentFixture<SecretoindividualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretoindividualPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecretoindividualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
