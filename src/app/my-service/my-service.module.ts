import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyServiceRoutingModule } from './my-service-routing.module';
import { ServicePageComponent } from './service-page/service-page.component';


@NgModule({
  declarations: [
    ServicePageComponent
  ],
  imports: [
    CommonModule,
    MyServiceRoutingModule
  ]
})
export class MyServiceModule { }
