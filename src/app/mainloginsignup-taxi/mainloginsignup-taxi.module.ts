import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainloginsignupTaxiPage } from './mainloginsignup-taxi.page';

const routes: Routes = [
  {
    path: '',
    component: MainloginsignupTaxiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainloginsignupTaxiPage]
})
export class MainloginsignupTaxiPageModule {}
