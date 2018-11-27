import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LazyComponent } from './lazy.component';


const routes: Routes = [{
    path: '',
    component: LazyComponent
}]
@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    RouterModule.forChild( routes )
  ],
  providers: [
  ]
})
export class LazyModule { }
