import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './component/map/map.component';
import { MenuComponent } from './component/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViajeComponent } from './component/viaje/viaje.component';
import { FavoritoComponent } from './component/favorito/favorito.component';
import { UbicacionComponent } from './component/ubicacion/ubicacion.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MenuComponent,
    ViajeComponent,
    FavoritoComponent,
    UbicacionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,       
    FontAwesomeModule  ,
    HttpClientModule           
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
