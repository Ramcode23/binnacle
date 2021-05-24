import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from './map/map.component';
import { MainComponent } from './main/main.component';
import { LocationsComponent } from './locations/locations.component';

import { PageroutingModule } from './pagerouting.module';
import { MaterialModule } from '../material/material.module';
import { MapEditComponent } from './map/map-edit/map-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations:

    [LocationsComponent,
      MapComponent,
      MainComponent,
      MapEditComponent,

    ],

  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDcjR_f0yu0qBIASpx8CL73f8Duhq2bwcs'
    }),
    ReactiveFormsModule,
    MaterialModule,
    PageroutingModule,

  ],
  exports: [MainComponent]
})
export class PageModule { }
