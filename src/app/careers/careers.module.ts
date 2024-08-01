import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareersPageComponent } from './careers-page/careers-page.component';


@NgModule({
  declarations: [
    CareersPageComponent
  ],
  imports: [
    CommonModule,
    CareersRoutingModule
  ]
})
export class CareersModule { }
