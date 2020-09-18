import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent implements OnInit {
  @Input() favoritos:Array<any>;
  @Output() seleccionoPunto=new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  /**
   * Evento que se ejecuta cuando selecciona alguno de los favoritos
   * @param item item seleccionado
   */
  seleccionoFavorito(item){
    this.seleccionoPunto.emit(item)
  }

}
