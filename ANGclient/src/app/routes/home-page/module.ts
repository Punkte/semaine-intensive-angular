import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import { Routing } from './router';
import { MerchantCardComponent } from '../../components/merchant-card/merchant-card.component';


@NgModule({
    declarations: [ HomePageComponent, MerchantCardComponent ],
    imports: [
      CommonModule,
      Routing
    ]
})
export class Module {}
