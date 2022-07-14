import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddfarmPageRoutingModule } from './addfarm-routing.module';

import { AddfarmPage } from './addfarm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddfarmPageRoutingModule
  ],
  declarations: [AddfarmPage]
})
export class AddfarmPageModule {}
