import {Cliente} from "./cliente";
import {ProductoJugador} from "./producto-jugador";

export interface Factura {
  id?:number,
  cajero:string,
  cliente:Cliente
  total:number
  productos:ProductoJugador[],
}
