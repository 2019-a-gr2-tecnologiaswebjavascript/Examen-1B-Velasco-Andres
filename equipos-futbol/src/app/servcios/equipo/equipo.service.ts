import { Injectable } from '@angular/core';
import {JugadorService} from "../jugador/jugador.service";

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private readonly _jugadorService:JugadorService) { }

  equipos = [
    {
      id:1,
      nombre:'Franco-Canadiense',
      liga: 'Barrial',
      fechaCreacion:'2001-06-14',
      numeroCopasInternacionales:2,
      campeonActual:true,
    },
    {
      id:2,
      nombre:'Ciudad Gotica SC',
      liga: 'Nacional',
      fechaCreacion:'1869-06-14',
      numeroCopasInternacionales:1,
      campeonActual:false,
    },
    {
      id:3,
      nombre:'Esto es permanente',
      liga: 'Barrial',
      fechaCreacion:'2010-06-14',
      numeroCopasInternacionales:0,
      campeonActual:true,
    }
    ];

    // Buscar equipo por nombre
    buscar(nombre:string){
        return this.equipos.filter(
          (equipo)=>{
                return equipo.nombre === nombre;
          }
        )
    }

    // Eliminar equipo
    eliminar(equipo){
      // Eliminar jugadores asociados
      this._jugadorService.borrarJugadorEquipo(equipo.id);
      // Obtener posicion del equipo en el arreglo
      const indice = this.equipos.indexOf(equipo);
      // Eliminar equipo
      this.equipos.splice(indice,1);
    }

  // Crear equipo
  crear(equipo){
      // Obtener el ultimo id de equipo guardado
      const idUltimoEquipo = this.equipos[this.equipos.length-1].id;
      equipo['id'] = idUltimoEquipo+1;
      this.equipos.push(equipo);

  }



}
