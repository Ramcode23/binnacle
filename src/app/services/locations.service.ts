import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Marker } from '../models/location.model';
@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  user: string;
  markerUrls: string[] = [];

  constructor(private db: AngularFirestore, private storage: AngularFireStorage, private auth: AngularFireAuth) {
    localStorage.getItem('user');
  }

  getLocations() {
    this.user = localStorage.getItem('user');
    return this.db.collection<Marker>('markers', ref => ref.where('user', '==', this.user)).valueChanges();
  }

  getLocation(id: string) {
    return this.db.collection<Marker>('markers', ref => ref.where('id', '==', id)).valueChanges();
  }

  createLocation(marker: Marker) {
    const id = this.db.createId();
    marker.user = localStorage.getItem('user');
    marker.id = id;
    /* marker.photo = `/${this.URLIMG}/${id}`; */
    const { desc, datelocation, lat, lng } = marker;
    return this.db.collection('markers').doc(id).set({ ...marker });
  }

  updateLocation(marker: Marker) {
    marker.urls = this.markerUrls;
    return this.db.collection('markers').doc(marker.id).update({ ...marker });
  }

  deletelocation(id: string) {
    return this.db.collection('markers').doc(id).delete();
  }

  async uploadFile(event, id) {
  
   
    for (let i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i];
      // const file = event.target.files[0];
      const filePath = await `/${id}/${id}${i + 1}`;
      const ref = await this.storage.ref(filePath);
      const task = await ref.put(file);
      const path = await ref.getDownloadURL().toPromise();
      await this.markerUrls.push(path);

    }

  }







}
