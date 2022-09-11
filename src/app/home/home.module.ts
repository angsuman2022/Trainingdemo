import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'
import { HomeComponent } from './home.component';
import{MasterComponent} from '../master/master.component'
import { Mainroutes } from '../routing/mainroutes';


@NgModule({
  declarations: [
    HomeComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Mainroutes)
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class MasterModule { }