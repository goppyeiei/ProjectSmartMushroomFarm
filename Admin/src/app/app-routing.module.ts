import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'deluser',
    loadChildren: () => import('./deluser/deluser.module').then( m => m.DeluserPageModule)
  },
  {
    path: 'adduser',
    loadChildren: () => import('./adduser/adduser.module').then( m => m.AdduserPageModule)
  },
  {
    path: 'addfarm',
    loadChildren: () => import('./addfarm/addfarm.module').then( m => m.AddfarmPageModule)
  },
  {
    path: 'delfarm',
    loadChildren: () => import('./delfarm/delfarm.module').then( m => m.DelfarmPageModule)
  },
  {
    path: 'delfarm2',
    loadChildren: () => import('./delfarm2/delfarm2.module').then( m => m.Delfarm2PageModule)
  },
  {
    path: 'delfarm2/:user_id',
    loadChildren: () => import('./delfarm2/delfarm2.module').then( m => m.Delfarm2PageModule)
  },
  {
    path: 'addfarm2/:user_id',
    loadChildren: () => import('./addfarm2/addfarm2.module').then( m => m.Addfarm2PageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
