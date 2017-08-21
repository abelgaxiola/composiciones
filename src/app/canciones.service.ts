import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Cancion } from './cancion';

@Injectable()
export class CancionesService {
  private cancionesUrl = './assets/canciones.json';
  private canciones: Cancion[];

  constructor(private http: Http) {
  }

  public getSongs(): Observable<Cancion[]> {
    return this.http.get(this.cancionesUrl)
      .map((response: Response) => <Cancion[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    // ToDo: Log somewhere else (text-file or database)
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
