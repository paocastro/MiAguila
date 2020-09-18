import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  private _jsonURL="assets/data/viaje.json"
  constructor(private http: HttpClient) { }

  /**
   * Carga el json 
   */
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
  
}
