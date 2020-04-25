import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // code from 14/4 class: we are telling the app to go the 'tabs' upon launch
    { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule ) }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
