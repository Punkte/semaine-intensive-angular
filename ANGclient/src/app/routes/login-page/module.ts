import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './login-page.component';
import { Routing } from './router';

@NgModule({
    declarations: [ LoginPageComponent ],
    imports: [
      CommonModule,
      Routing
    ]
})
export class Module {}
