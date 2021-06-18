import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  album = '';
  url = '';
  locationsService: any;
  constructor(private route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {

    const { url, album } = history.state;
    if (url && album) {

      localStorage.setItem('url', url);
      localStorage.setItem('album', album);
    }

    this.url = localStorage.getItem('url');
    this.album = localStorage.getItem('album');

  }




}
