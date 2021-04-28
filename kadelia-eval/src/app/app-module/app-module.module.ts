import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppModuleRoutingModule } from './app-module-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    AppModuleRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class AppModuleModule { }
