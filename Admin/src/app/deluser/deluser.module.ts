import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeluserPageRoutingModule } from './deluser-routing.module';

import { DeluserPage } from './deluser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeluserPageRoutingModule
  ],
  declarations: [DeluserPage]
})
export class DeluserPageModule {}
