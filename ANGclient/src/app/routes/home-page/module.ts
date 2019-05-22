import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import { Routing } from './router';

@NgModule({
    declarations: [ HomePageComponent ],
    imports: [
      CommonModule,
      Routing
    ]
})
export class Module {}
