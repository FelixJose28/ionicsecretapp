import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SecretoindividualPage } from '../secretoindividual/secretoindividual.page'
import { IonicModule } from '@ionic/angular';
import { TodosecretosPageRoutingModule } from './todosecretos-routing.module';
import { TodosecretosPage } from './todosecretos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodosecretosPageRoutingModule
  ],
  declarations: [TodosecretosPage, SecretoindividualPage]
})
export class TodosecretosPageModule {}
