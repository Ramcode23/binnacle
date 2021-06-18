
export class Marker {

  public id: string;
  public lat: number;
  public lng: number;
  public title = 'Sin Titulo';
  public desc = 'Sin Descripcion';
  public datelocation: string;
  public user: string;
  public urls: string[];

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;


  }

}

export class UrlMarker {

  route: string;
}

