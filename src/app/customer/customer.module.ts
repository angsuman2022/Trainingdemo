import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'
import { CustomerComponent } from './customer.component';
import { customerroutes } from '../routing/customerroutes';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(customerroutes)
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }