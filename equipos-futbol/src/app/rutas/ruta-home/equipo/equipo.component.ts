import { Component, OnInit } from '@angular/core';
import {EquipoService} from "../../../servcios/equipo/equipo.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {


  // Liste asociada al servicio
  equipos = this._equipoService.equipos;

  // Atributo del formulario de busqueda
  nombreEquipoConsulta: string;

  constructor(private readonly _equipoService:EquipoService) { }

  ngOnInit() {
  }

  buscarEquipo(){
    //this.equipos = this._equipoService.buscar(this.nombreEquipoConsulta);
    if(this.nombreEquipoConsulta){
      this.equipos = this._equipoService.buscar(this.nombreEquipoConsulta);
    }else {
      this.equipos = this._equipoService.equipos;
    }
  }

  refrescarLista(){
    this.equipos = this._equipoService.equipos;

  }

  eliminarEquipo(equipo){
    this._equipoService.eliminar(equipo);
    this.refrescarLista();
  }



}
