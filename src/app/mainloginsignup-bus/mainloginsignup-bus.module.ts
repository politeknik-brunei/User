import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainloginsignupBusPage } from './mainloginsignup-bus.page';

const routes: Routes = [
  {
    path: '',
    component: MainloginsignupBusPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainloginsignupBusPage]
})
export class MainloginsignupBusPageModule {}
