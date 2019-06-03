import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JugadorService} from "../../../../../servcios/jugador/jugador.service";
import {EquipoComponent} from "../../equipo.component";
import {JugadorComponent} from "../jugador.component";

@Component({
  selector: 'app-crear-jugador',
  templateUrl: './crear-jugador.component.html',
  styleUrls: ['./crear-jugador.component.css']
})
export class CrearJugadorComponent implements OnInit {
  idEquipo:number;
  jugadores;

  // ngModels del formulario
  nombreCompletoJugador:string;
  fechaIngreso: string;
  goles:number;
  poderEspecial: string;
  nombreCamiseta:string;
  ncamiseta:number;
  precioJugador: number;

  constructor(
    private readonly _jugadorService:JugadorService,
    private readonly _router:Router,
    private padre: JugadorComponent

  ) {
    console.log("PADRE: ",padre.route.snapshot.params['idEquipo']);
    this.idEquipo = +padre.route.snapshot.params['idEquipo']
  }

  ngOnInit() {

  }

  crearJugador(){

    let jugadorNuevo={
      idEquipo:this.idEquipo,
      numeroCamiseta:this.ncamiseta,
      nombreCamiseta:this.nombreCamiseta,
      nombreCompletoJugador: this.nombreCompletoJugador,
      poderEspecialDos:this.poderEspecial,
      fechaIngresoEquipo:this.fechaIngreso,
      goles:this.goles,
      precio:this.precioJugador
    };
    this._jugadorService.crearJugador(jugadorNuevo);
    //this.jugadores = this._jugadorService.obtenerJugadores(this.idEquipo);

    const url = ['/equipo',this.idEquipo,'jugadores'];
    this._router.navigate(url);
  }

}
