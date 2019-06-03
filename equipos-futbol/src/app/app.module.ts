import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './rutas/ruta-home/menu.component';
import { EquipoComponent } from './rutas/ruta-home/equipo/equipo.component';
import { JugadorComponent } from './rutas/ruta-home/equipo/jugador/jugador.component';
import { ComprasComponent } from './rutas/ruta-home/compras/compras.component';
import { FacturaComponent } from './rutas/ruta-home/factura/factura.component';
import {FormsModule} from "@angular/forms";
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { ProductoItemComponent } from './rutas/ruta-home/compras/producto-item/producto-item.component';
import { CrearEquipoComponent } from './rutas/ruta-home/equipo/crear-equipo/crear-equipo.component';
import { CrearJugadorComponent } from './rutas/ruta-home/equipo/jugador/crear-jugador/crear-jugador.component';

import {MenubarModule} from 'primeng/menubar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EquipoComponent,
    JugadorComponent,
    ComprasComponent,
    FacturaComponent,
    RutaLoginComponent,
    ProductoItemComponent,
    CrearEquipoComponent,
    CrearJugadorComponent,
    RutaNoEncontradaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MenubarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



