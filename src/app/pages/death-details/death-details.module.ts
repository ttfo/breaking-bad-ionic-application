import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeathDetailsPageRoutingModule } from './death-details-routing.module';

import { DeathDetailsPage } from './death-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeathDetailsPageRoutingModule
  ],
  declarations: [DeathDetailsPage]
})
export class DeathDetailsPageModule {}
