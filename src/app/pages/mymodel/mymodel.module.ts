import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MymodelPageRoutingModule } from './mymodel-routing.module';

import { MymodelPage } from './mymodel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MymodelPageRoutingModule
  ],
  declarations: [MymodelPage]
})
export class MymodelPageModule {}
