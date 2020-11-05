import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarsecretoPage } from './registrarsecreto.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarsecretoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarsecretoPageRoutingModule {}
