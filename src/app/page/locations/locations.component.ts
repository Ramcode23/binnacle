import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Marker } from '../../models/location.model';
import { LocationsService } from '../../services/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})

export class LocationsComponent implements OnInit, AfterViewInit {
  load = true;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [];
  markers: Marker[] = [];
  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private locationsService: LocationsService) { }
  displayedColumns: string[] = ['datelocation', 'title', 'desc', 'action'];
  dataSource = new MatTableDataSource(this.markers);
  @ViewChild('paginator') paginator: MatPaginator;
  ngOnInit(): void {
    this.load = true;
    this.locationsService.getLocations().subscribe(markers => {

      this.markers = markers;
      this.dataSource.data = markers;
      this.load = false;
    });

  }
  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.markers);
    this.dataSource.paginator = this.paginator;

  }


  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

}

