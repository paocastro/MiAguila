import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { EventoDireccionService } from 'src/app/servicio/evento-direccion.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() cordenada1;
  @Input() cordenada2;
  map: mapboxgl.Map;
  marcador1 = new mapboxgl.Marker
  marcador2 = new mapboxgl.Marker
  route;
  posicion = true;
  coordenadas = new Array<any>()

  constructor(private eventoCambio: EventoDireccionService) { }



  ngOnInit() {
    this.InicializarMapa();
    this.cambioMarcador();
    this.coordenadas.push([this.cordenada1[0], this.cordenada1[1]])
    this.coordenadas.push([this.cordenada2[0], this.cordenada2[1]])
    this.crearMarcador(this.marcador1,0,this.cordenada1[0], this.cordenada1[1])
    this.crearMarcador(this.marcador2,1,this.cordenada2[0], this.cordenada2[1])
    
  }

  /**
   * Evento que suscribe para el cambio de un punto
   */
  cambioMarcador(){
    if(this.map){
      this.eventoCambio.item.subscribe(x=>{
        if(x['punto']==1){
          this.crearMarcador(this.marcador1,0,x['lat'], x['long'])
        }else{
          this.crearMarcador(this.marcador2,1,x['lat'], x['long'])
        }
        this.map.getSource('route').setData(this.route);
      })
    }
    
  }

  /**
   * Crea un nuevo marcador en el mapa
   * @param marcador marcador del mapa
   * @param index posicion 0|1
   * @param long longitud
   * @param lat latitud
   */
  crearMarcador(marcador:mapboxgl.Marker,index:number,long: number, lat: number) {
    this.posicion = !this.posicion;


     marcador.setLngLat([long, lat])
      .addTo(this.map);

      this.coordenadas[index][0] = long
      this.coordenadas[index][1] = lat
    marcador.on('drag', () => {
      this.map.getSource('route').setData(this.route);      
    })

  }

/**
 * Inicializa las variables del mapa
 */
  InicializarMapa(){
    mapboxgl.accessToken = environment.mapboxKey
    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.cordenada1, // starting position
      zoom: 12, // starting zoom,

    });

    this.route = {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'geometry': {
            'type': 'LineString',
            'coordinates': [[0, 0], [0, 0]]
          }
        }
      ]
    };
    this.route.features[0].geometry.coordinates=this.coordenadas

    this.map.on('load', () => {
      // Add a source and layer displaying a point which will be animated in a circle.
      this.map.addSource('route', {
        'type': 'geojson',
        'data': this.route
      });
      this.map.addLayer({
        'id': 'route',
        'source': 'route',
        'type': 'line',
        'paint': {
          'line-width': 2,
          'line-color': '#007cbf'
        }
      });
    })
  }


}
