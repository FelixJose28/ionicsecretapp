import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    
  },
  {
    path: 'loggin',
    loadChildren: () => import('./pages/loggin/loggin.module').then( m => m.LogginPageModule)
  },
  {
    path: 'todosecretos',
    loadChildren: () => import('./pages/todosecretos/todosecretos.module').then( m => m.TodosecretosPageModule),
  },
  
  {
    path: 'secretoindividual',
    loadChildren: () => import('./pages/secretoindividual/secretoindividual.module').then( m => m.SecretoindividualPageModule),
  },
  {
    path: 'cambiarclave',
    loadChildren: () => import('./pages/cambiarclave/cambiarclave.module').then( m => m.CambiarclavePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'registrarsecreto',
    loadChildren: () => import('./pages/registrarsecreto/registrarsecreto.module').then( m => m.RegistrarsecretoPageModule)
  },
  {
    path: 'secretoindividual',
    loadChildren: () => import('./pages/secretoindividual/secretoindividual.module').then( m => m.SecretoindividualPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
