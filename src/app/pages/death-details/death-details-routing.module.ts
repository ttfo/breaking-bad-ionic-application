import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeathDetailsPage } from './death-details.page';

const routes: Routes = [
  {
    path: '',
    component: DeathDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeathDetailsPageRoutingModule {}
