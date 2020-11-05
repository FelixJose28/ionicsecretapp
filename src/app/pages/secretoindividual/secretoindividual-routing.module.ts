import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecretoindividualPage } from './secretoindividual.page';

const routes: Routes = [
  {
    path: '',
    component: SecretoindividualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecretoindividualPageRoutingModule {}
