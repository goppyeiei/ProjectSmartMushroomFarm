import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Addfarm2PageRoutingModule } from './addfarm2-routing.module';

import { Addfarm2Page } from './addfarm2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Addfarm2PageRoutingModule
  ],
  declarations: [Addfarm2Page]
})
export class Addfarm2PageModule {}
