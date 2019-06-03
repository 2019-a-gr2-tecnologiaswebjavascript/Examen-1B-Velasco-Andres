import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  jugadores = [
    {
      id:1,
      idEquipo:2,
      numeroCamiseta:4,
      nombreCamiseta:'alterno',
      nombreCompletoJugador:'Steve Hyuga',
      poderEspecialDos:'Tiro del tigre',
      fechaIngresoEquipo:'2015-10-12',
      goles:101,
      precio:22000
    },
    {
      id:2,
      idEquipo:3,
      numeroCamiseta:10,
      nombreCamiseta:'oficial',
      nombreCompletoJugador:'Oliver',
      poderEspecialDos:'Tiro con chanfle',
      fechaIngresoEquipo:'2014-12-12',
      goles:100,
      precio:15000
    },
    {
      id:3,
      idEquipo:1,
      numeroCamiseta:69,
      nombreCamiseta:'alterno',
      nombreCompletoJugador:'Juanito pecados',
      poderEspecialDos:'Para que kieres saber eso',
      fechaIngresoEquipo:'2010-01-22',
      goles:122,
      precio:10000
    },
    {
      id:4,
      idEquipo:3,
      numeroCamiseta:9,
      nombreCamiseta:'oficial',
      nombreCompletoJugador:'Snaider',
      poderEspecialDos:'Ya no me acuerdo',
      fechaIngresoEquipo:'2014-12-12',
      goles:100,
      precio:5000.21
    },
  ];
  constructor() { }

  obtenerJugadores(idEquipo:number){
      return this.jugadores.filter(
        (jugador)=>{
                  return jugador.idEquipo === idEquipo
              }
      )
  }

  buscarJugador(nombre:string){
    return this.jugadores.filter(
      (jugador)=>{
                return jugador.nombreCompletoJugador == nombre;
              }
    )
  }

  borrarJugador(idJugador:number){
    const  jugador = this.jugadores.filter(
      (jugador)=>{
        return jugador.id === idJugador;
      }
    )[0];
    const indice = this.jugadores.indexOf(jugador);
    this.jugadores.splice(indice,1);
  }

  borrarJugadorEquipo(idEquipo:number){
    this.jugadores.forEach(
      (jugador)=>{
        if(jugador.idEquipo === idEquipo){
          const indice = this.jugadores.indexOf(jugador);
          this.jugadores.splice(indice,1);
        }
      }
    );

  }

  crearJugador(jugador){
    jugador['id'] = this.jugadores[this.jugadores.length-1].id+1;
    this.jugadores.push(jugador);
  }


}
