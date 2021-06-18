import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../../services/locations.service';
import { Marker } from '../../models/location.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  urls: string[] = [];
  id: string;
  profileUrl: Observable<string | null>;
  constructor(private locationsService: LocationsService,
              private route: ActivatedRoute, private router: Router
  ) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.locationsService.getLocation(this.id).subscribe(marker => {
      this.urls = marker[0].urls;
    });
  }
  redirectPhoto(id: string) {
    this.router.navigateByUrl(`main/photo/${id}`, { state: { url: this.urls[id], album: this.id } });
  }

}


