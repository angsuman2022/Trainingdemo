import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'
import { SupplierComponent } from './supplier.component';
import { supplierroutes } from '../routing/supplierroutes';

@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(supplierroutes)
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }