import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Addfarm2Page } from './addfarm2.page';

const routes: Routes = [
  {
    path: '',
    component: Addfarm2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Addfarm2PageRoutingModule {}
