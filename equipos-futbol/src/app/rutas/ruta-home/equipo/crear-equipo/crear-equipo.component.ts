import { Component, OnInit } from '@angular/core';
import {EquipoService} from "../../../../servcios/equipo/equipo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent implements OnInit {

  // Atributos del formulario de creacion ng-models
  nombreEquipo: string;
  ligaEquipo: string;
  fechaCreacionEquipo: string;
  numeroCopasInternacionales:number;
  campeonActual:boolean;
  constructor(private readonly _equipoService:EquipoService,private readonly _router:Router) { }

  ngOnInit() {
  }

  crearEquipo(){
    let equipoNuevo = {
      nombre:this.nombreEquipo,
      liga: this.ligaEquipo,
      fechaCreacion:this.fechaCreacionEquipo,
      numeroCopasInternacionales:this.numeroCopasInternacionales,
      campeonActual:this.campeonActual,
    };
    this._equipoService.crear(equipoNuevo);
    // redirigir a lista de equipos
    const url = ['/equipos'];
    this._router.navigate(url);
  }
}
