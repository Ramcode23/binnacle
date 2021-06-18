import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-map-edit',
  templateUrl: './map-edit.component.html',
  styleUrls: ['./map-edit.component.css']
})
export class MapEditComponent implements OnInit {

  form: FormGroup;
  selectedFile = null;
 
  constructor(public fb: FormBuilder,
    public dialogRef: MatDialogRef<MapEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private locationsService: LocationsService,
  ) {
    this.form = fb.group({
      titulo: data.title,
      desc: data.desc,
      date: data.date,
      file: data.file
    });
  }

  ngOnInit(): void {
  }
  async saveChanges() {
  await this.locationsService.uploadFile(this.selectedFile, this.data.id);
  this.dialogRef.close(this.form.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files;
  }

  uploadFile(event) {
    this.selectedFile = event;
   
  }
}
