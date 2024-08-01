import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersPageComponent } from './careers-page/careers-page.component';

const routes: Routes = [
  {
    path:'',
    component:CareersPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareersRoutingModule { }
