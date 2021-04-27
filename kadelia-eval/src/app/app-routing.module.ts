import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user/login',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'user/logout',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'game/new',
    loadChildren: () => import('./game/game.module').then(m => m.GameModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
