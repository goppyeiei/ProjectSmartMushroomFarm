import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Delfarm2Page } from './delfarm2.page';

const routes: Routes = [
  {
    path: '',
    component: Delfarm2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Delfarm2PageRoutingModule {}
