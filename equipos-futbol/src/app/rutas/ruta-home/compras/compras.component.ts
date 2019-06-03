import { Component, OnInit } from '@angular/core';
import {JugadorService} from "../../../servcios/jugador/jugador.service";
import {CompraService} from "../../../servcios/compra/compra.service";
import {AuthService} from "../../../servcios/auth/auth.service";
import {FacturaService} from "../../../servcios/factura/factura.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  jugadores = this._jugadoresService.jugadores;
  total:number =  0;

  nombreCliente:string;
  cedulaRuc: string;
  direccion: string;
  telefono: string;
  correo: string;


  cajero:string = this._authService.cajero;
  compras;

  constructor(
      private readonly _jugadoresService:JugadorService,
      private  readonly _compraService:CompraService,
      private readonly _authService:AuthService,
      private readonly _facturaService:FacturaService,
      private readonly _router:Router,
    ) {
    this._compraService.listaCompras = [];

  }

  agregar(jugador){
      console.log(this._compraService.agregarProducto(jugador));
      this.total = this._compraService.total;

  }

  quitoProducto(evento:number){
    console.log("se recibio ",evento);
    this.total = evento;
  }

  ngOnInit() {
  }

  generarFactura(formularioCrearFactura: HTMLFormElement) {
      const cliente = {
        nombreCliente:this.nombreCliente,
        cedulaRuc:this.cedulaRuc,
        direccion:this.direccion,
        telefono:this.telefono,
        correo:this.correo,
      };

      if(this._compraService.listaCompras.length==0){
        alert("Por favor ingrese productos!!");
      }else {
        this._facturaService.crearFactura(
          cliente,
          this._compraService.listaCompras,
          this.cajero,
          this.total
        );
        alert("Factura creada con exito");
        console.log(this._facturaService.facturas);
        const url = ['/facturas'];
        this._router.navigate(url);
      }
  }
}
