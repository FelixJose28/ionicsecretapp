import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodosecretosPage } from './todosecretos.page';

describe('TodosecretosPage', () => {
  let component: TodosecretosPage;
  let fixture: ComponentFixture<TodosecretosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosecretosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodosecretosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
