import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Delfarm2PageRoutingModule } from './delfarm2-routing.module';

import { Delfarm2Page } from './delfarm2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Delfarm2PageRoutingModule
  ],
  declarations: [Delfarm2Page]
})
export class Delfarm2PageModule {}
