import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeluserPage } from './deluser.page';

const routes: Routes = [
  {
    path: '',
    component: DeluserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeluserPageRoutingModule {}
