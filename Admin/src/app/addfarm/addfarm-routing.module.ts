import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddfarmPage } from './addfarm.page';

const routes: Routes = [
  {
    path: '',
    component: AddfarmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddfarmPageRoutingModule {}
