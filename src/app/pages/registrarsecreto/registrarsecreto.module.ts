import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarsecretoPageRoutingModule } from './registrarsecreto-routing.module';

import { RegistrarsecretoPage } from './registrarsecreto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarsecretoPageRoutingModule
  ],
  declarations: [RegistrarsecretoPage]
})
export class RegistrarsecretoPageModule {}
