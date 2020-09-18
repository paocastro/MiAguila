import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoDireccionService {

  constructor() { }
  item= new Subject();

  /**
   * Cuando se cambia un punto recibe la seleccion del punto y la notifica
   * @param value json con los valores
   */
  cambioPunto(value){
    this.item.next(value)
  }

}
