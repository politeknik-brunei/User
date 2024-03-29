import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: 'mainloginsignup-page', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'fare4', loadChildren: './fare4/fare4.module#Fare4PageModule' },
  { path: 'fare6', loadChildren: './fare6/fare6.module#Fare6PageModule' },
  { path: 'pick4', loadChildren: './pick4/pick4.module#Pick4PageModule' },
  { path: 'pick6', loadChildren: './pick6/pick6.module#Pick6PageModule' },
  { path: 'homepage', loadChildren: './homepage/homepage.module#HomepagePageModule' },
  { path: 'login-page', loadChildren: './login-page/login-page.module#LoginPagePageModule' },
  { path: 'signup-page', loadChildren: './signup-page/signup-page.module#SignupPagePageModule' },
  { path: 'mainloginsignup-page', loadChildren: './mainloginsignup-page/mainloginsignup-page.module#MainloginsignupPagePageModule' },
  { path: 'bustypes', loadChildren: './bustypes/bustypes.module#BustypesPageModule' },
  // { path: 'bustypes', loadChildren: './bustypes/bustypes.module#BustypesPageModule' },
  { path: 'totalpayment2', loadChildren: './totalpayment2/totalpayment2.module#Totalpayment2PageModule' },
  // { path: 'totalpaymentbus', loadChildren: './totalpaymentbus/totalpaymentbus.module#TotalpaymentbusPageModule' },
  { path: 'qrcodebus', loadChildren: './qrcodebus/qrcodebus.module#QrcodebusPageModule' },
  { path: 'busmap', loadChildren: './busmap/busmap.module#BusmapPageModule' },
  { path: 'customercare', loadChildren: './customercare/customercare.module#CustomercarePageModule' },
  { path: 'paymentsetting', loadChildren: './paymentsetting/paymentsetting.module#PaymentsettingPageModule' },
  { path: 'userprofile-page', loadChildren: './userprofile-page/userprofile-page.module#UserprofilePagePageModule' },
  { path: 'taxihome', loadChildren: './taxihome/taxihome.module#TaxihomePageModule' },
  { path: 'watertaxihome', loadChildren: './watertaxihome/watertaxihome.module#WatertaxihomePageModule' },
  { path: 'aboutpage', loadChildren: './aboutpage/aboutpage.module#AboutpagePageModule' },
  { path: 'uploader', loadChildren: './uploader/uploader.module#UploaderPageModule' },

  // { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfilePageModule' },

  { path: 'watertaxihome', loadChildren: './watertaxihome/watertaxihome.module#WatertaxihomePageModule' },
  { path: 'taxitypes', loadChildren: './taxitypes/taxitypes.module#TaxitypesPageModule' },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
