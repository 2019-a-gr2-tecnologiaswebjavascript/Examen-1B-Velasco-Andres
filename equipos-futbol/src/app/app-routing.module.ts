import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from "./rutas/ruta-home/menu.component";
import {EquipoComponent} from "./rutas/ruta-home/equipo/equipo.component";
import {JugadorComponent} from "./rutas/ruta-home/equipo/jugador/jugador.component";
import {ComprasComponent} from "./rutas/ruta-home/compras/compras.component";
import {FacturaComponent} from "./rutas/ruta-home/factura/factura.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {CrearEquipoComponent} from "./rutas/ruta-home/equipo/crear-equipo/crear-equipo.component";
import {CrearJugadorComponent} from "./rutas/ruta-home/equipo/jugador/crear-jugador/crear-jugador.component";
import {EstaLogeadoGuard} from "./servcios/guards/esta-logeado.guard";
import {RutaNoEncontradaComponent} from "./rutas/ruta-no-encontrada/ruta-no-encontrada.component";

const routes: Routes = [
  {
    path:'home',
    component:MenuComponent,
    canActivate:[
      EstaLogeadoGuard
    ]
  },
  {
    path:'login',
    component:RutaLoginComponent,
  },
  {
    path:'equipos',
    component:EquipoComponent,
    canActivate:[
      EstaLogeadoGuard
    ]
  },
  {
    path:'crear-equipo',
    component:CrearEquipoComponent,
    canActivate:[
      EstaLogeadoGuard
    ]
  },
  {
    path:'equipo/:idEquipo/jugadores',
    component:JugadorComponent,
    canActivate:[
      EstaLogeadoGuard
    ],/*
    children:[
      {
        path:'crear',
        component:CrearJugadorComponent,
        canActivate:[
          EstaLogeadoGuard
        ]
      },
    ]*/
  },
  {
    path:'crear/:idEquipo',
    component:CrearJugadorComponent,
    canActivate:[
      EstaLogeadoGuard
    ]
  },

  {
    path:'compras',
    component:ComprasComponent,
    canActivate:[
      EstaLogeadoGuard
    ]
  },
  {
    path:'facturas',
    component:FacturaComponent,
    canActivate:[
      EstaLogeadoGuard
    ]
  },
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'**',
    component: RutaNoEncontradaComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
