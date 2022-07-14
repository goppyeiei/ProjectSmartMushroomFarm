import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DelfarmPageRoutingModule } from './delfarm-routing.module';

import { DelfarmPage } from './delfarm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DelfarmPageRoutingModule
  ],
  declarations: [DelfarmPage]
})
export class DelfarmPageModule {}
