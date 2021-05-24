import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Marker } from '../models/location.model';
@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  user: string;
  constructor(private db: AngularFirestore, private auth: AngularFireAuth) {
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
    const { desc, datelocation, lat, lng } = marker;
    return this.db.collection('markers').doc(id).set({ ...marker });
  }

  updateLocation(marker: Marker) {
    return this.db.collection('markers').doc(marker.id).update({ ...marker });
  }

  deletelocation(id: string) {
    return this.db.collection('markers').doc(id).delete();
  }

}
