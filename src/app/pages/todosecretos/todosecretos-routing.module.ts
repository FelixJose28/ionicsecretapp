import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosecretosPage } from './todosecretos.page';

const routes: Routes = [
  {
    path: '',
    component: TodosecretosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosecretosPageRoutingModule {}
