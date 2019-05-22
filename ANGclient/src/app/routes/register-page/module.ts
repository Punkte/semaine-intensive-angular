import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RegisterPageComponent } from './register-page.component';
import { Routing } from './router';
import { FormRegisterComponent } from '../../components/form-register/form-register.component';

@NgModule({
    declarations: [ RegisterPageComponent, FormRegisterComponent ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      Routing
    ]
})
export class Module {}
