import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {JugadorService} from "../../../../servcios/jugador/jugador.service";

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit, OnDestroy {

  constructor(private readonly _activateRoute:ActivatedRoute, private readonly _jugadorService:JugadorService ) {
    //console.log("El constructor");
    //this.jugadores = this._jugadorService.obtenerJugadores(this.idEquipo);
  }

  idEquipo:number;
  jugadores;
  nombreJugador:string;
  route = this._activateRoute;


  ngOnInit() {
    console.log("Se ha iniciado");
    const parametros$ = this._activateRoute.params;
    parametros$.subscribe( // Estamos suscritos a esos cambios
      (parametros)=>{ // Ok TRY
        console.log('Parametros: ', parametros); //Para los parametros de ruta
        this.idEquipo = +parametros.idEquipo;
        this.jugadores = this._jugadorService.obtenerJugadores(this.idEquipo);
      },(error)=>{ // :( CATCH
        console.log('Error: ', error);
      },
      ()=>{ // Completado FINALLY -> OPCIONAL
        console.log('completo');
      }
    );

  }

  ngOnDestroy(){

  }

  obtenerJugadores(){
    return this._jugadorService.obtenerJugadores(this.idEquipo);
  }


  buscarJugadores(formulario){
    //const nombre = formulario.controls.nombreJugador.value;
    console.log(this.nombreJugador);
    //this.jugadores= this._jugadorService.buscarJugador(nombre);
    if(this.nombreJugador){
      console.log("Entro aqui");
      this.jugadores = this._jugadorService.buscarJugador(this.nombreJugador);
    }else {
      console.log("Nope");
      this.jugadores = this._jugadorService.obtenerJugadores(this.idEquipo);
    }
  }

  borrarJugadores(idJugador:number){
    this._jugadorService.borrarJugador(idJugador);
    this.jugadores = this._jugadorService.obtenerJugadores(this.idEquipo);
  }



}
