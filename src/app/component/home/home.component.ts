import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/servicio/peticiones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuVisible=false;
  pedirViaje=true;
  informacion;
  punto1;
  punto2;
  isMobile=true;
  constructor(private peticion:PeticionesService) { }

  ngOnInit() {
    this.cargarInformacion()
    this.cargaDatosDispocitivo()
  }

  cargaDatosDispocitivo(){
    if(window.innerWidth>800){
      this.isMobile=false
      this.menuVisible=true
    }
    console.log(this.isMobile)
  }
  /**
   * Carga el json inicial
   */
  cargarInformacion(){
    this.peticion.getJSON().subscribe(x=>{
      this.informacion=x
      this.punto1=[]
      this.punto2=[]
      this.punto1.push(this.informacion.favoritos[0].lat)
      this.punto1.push(this.informacion.favoritos[0].long)
      this.punto2.push(this.informacion.favoritos[1].lat)
      this.punto2.push(this.informacion.favoritos[1].long)
      console.log(this.punto1)
    })
  }
}
