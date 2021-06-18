import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Marker } from '../../models/location.model';
import { MapEditComponent } from './map-edit/map-edit.component';
import { LocationsService } from '../../services/locations.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  markers: Marker[] = [];
  files: File[] = [];
  public lat: number;
  public lng: number;
  id: string;
  constructor(private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private locationsService: LocationsService,
    private route: ActivatedRoute
  ) {

    this.getDirection();
    this.route.params.subscribe(marker => {
      this.id = marker.id;
    });

  }

  ngOnInit(): void {
    this.getMarkers();
  }

  addMarker(event) {
    if (!this.id) {
      const location = event.coords;
      const marker = new Marker(location.lat, location.lng);
      marker.datelocation = new Date().toISOString();
      this.locationsService.createLocation(marker);
      this.snackBar.open('Marker has been  added', 'Message', { duration: 3000 });
    } else {
      this.snackBar.open('You can`t add other marker', 'message', { duration: 3000 });
    }

  }

  removeMarker(id: string) {
    this.locationsService.deletelocation(id).then(resp => {
      this.snackBar.open('Marker has been removed', 'Mensaje', { duration: 3000 });
    });
  }

  editMap(marker: Marker) {
    const dialogRef = this.dialog.open(MapEditComponent, {
      width: '250px',
      data: { id: marker.id, titulo: marker.title, desc: marker.desc, date: marker.datelocation, file: this.files }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      marker.title = result.titulo;
      marker.desc = result.desc;
      marker.datelocation = result.date;
    
      this.editMarker(marker);
    });
  }

  editMarker(marker: Marker) {
    this.locationsService.updateLocation(marker);
  }

  getDirection() {
    navigator.geolocation.getCurrentPosition(location => {
      const { latitude, longitude } = location.coords;
      this.lat = latitude;
      this.lng = longitude;

    });
  }

  getMarkers() {
    this.locationsService.getLocations()
      .subscribe(markers => {
        this.markers = markers;
        if (this.id) {
          this.getMarker(this.id);
          this.lat = this.markers[0].lat;
          this.lng = this.markers[0].lng;
        }
      });

  }

  getMarker(id: string) {
    this.markers = this.markers.filter(marker => marker.id === id);
  }

}
