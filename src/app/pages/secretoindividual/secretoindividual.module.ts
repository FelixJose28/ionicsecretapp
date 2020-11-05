import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecretoindividualPageRoutingModule } from './secretoindividual-routing.module';

import { SecretoindividualPage } from './secretoindividual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecretoindividualPageRoutingModule
  ],
  declarations: [SecretoindividualPage]
})
export class SecretoindividualPageModule {}
