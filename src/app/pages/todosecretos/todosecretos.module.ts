import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  declarations: [TodosecretosPage]
})
export class TodosecretosPageModule {}
