import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations/locations.component';
import { MapComponent } from './map/map.component';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { PhotoComponent } from './photo/photo.component';




const routes: Routes = [
  { path: 'locations', component: LocationsComponent, },
  { path: 'map', component: MapComponent },
  { path: 'map/:id', component: MapComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'photo/:id', component: PhotoComponent },

  { path: '', pathMatch: 'full', redirectTo: 'locations' }

];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildrouterModule { }


