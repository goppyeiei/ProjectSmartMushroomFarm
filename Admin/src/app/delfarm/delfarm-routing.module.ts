import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DelfarmPage } from './delfarm.page';

const routes: Routes = [
  {
    path: '',
    component: DelfarmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DelfarmPageRoutingModule {}
