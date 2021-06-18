import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {environment  } from '../../environments/environment';
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
import { PhotoComponent } from './photo/photo.component';
import { AlbumComponent } from './album/album.component';



@NgModule({
  declarations:

    [LocationsComponent,
      MapComponent,
      MainComponent,
      MapEditComponent,
      PhotoComponent,
      AlbumComponent
    ],

  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.agmapikey
    }),
    ReactiveFormsModule,
    MaterialModule,
    PageroutingModule,

  ],
  exports: [MainComponent]
})
export class PageModule { }
