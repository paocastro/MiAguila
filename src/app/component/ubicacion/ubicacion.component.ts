import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {
  @Input() placeholder:string;
  constructor() { }

  ngOnInit() {
  }

}
