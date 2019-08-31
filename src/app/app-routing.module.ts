import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'fare4', loadChildren: './fare4/fare4.module#Fare4PageModule' },
  { path: 'fare6', loadChildren: './fare6/fare6.module#Fare6PageModule' },
  { path: 'pick4', loadChildren: './pick4/pick4.module#Pick4PageModule' },
  { path: 'pick6', loadChildren: './pick6/pick6.module#Pick6PageModule' },
  { path: 'homepage', loadChildren: './homepage/homepage.module#HomepagePageModule' },  { path: 'bustypes', loadChildren: './bustypes/bustypes.module#BustypesPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
