import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field/form-field.component';
import { LoadingComponent } from './loading/loading.component';
import { IfUserDirectiveDirective } from './if-user-directive.directive';
import { IfNotUserDirectiveDirective } from './if-not-user-directive.directive';



@NgModule({
  declarations: [
    FormFieldComponent,
    LoadingComponent,
    IfUserDirectiveDirective,
    IfNotUserDirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent,
    IfUserDirectiveDirective,
    IfNotUserDirectiveDirective
  ]
})
export class SharedModule { }
