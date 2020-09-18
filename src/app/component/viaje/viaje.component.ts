import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventoDireccionService } from 'src/app/servicio/evento-direccion.service';


@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.css']
})
export class ViajeComponent implements OnInit {
  @Input() informacion;
  @Output() cambioPunto=new EventEmitter<any>();
  tipoViaje=1;
  step=1;
  constructor(private eventoCambioPunto:EventoDireccionService) { }

  ngOnInit() {
    
  }

  /**
   * Evento que es llamado desde el component favorito para notificar la seleccion del punto selecccionado
   * @param item direccion favorito seleccionada
   */
  seleccionoPunto(item){
    let punto={'punto':this.step, 'long': item.long,'lat':item.lat}
    this.eventoCambioPunto.cambioPunto(punto)
  }

}
