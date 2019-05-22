import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageComponent } from './user-page.component';
import { Routing } from './router';

@NgModule({
    declarations: [ UserPageComponent ],
    imports: [
      CommonModule,
      Routing
    ]
})
export class Module {}
