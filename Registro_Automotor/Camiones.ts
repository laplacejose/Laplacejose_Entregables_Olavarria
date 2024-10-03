
"use strict"
import {Vehiculo }   from "./Vehiculos";
import {Titular }   from "./Titular";
export class Camion{

   
    private capacidadCarga :number;
    private camion:Vehiculo;
    private titular:Titular;

    constructor(ccapacidadCarga:number,ccamion:Vehiculo,ctitular:Titular){
        this.capacidadCarga=ccapacidadCarga;
        this.camion=ccamion;
        this.titular=ctitular;
      

      }
  //metodos set
  
  public setcapacidadCarga(scapacidadCarga:number):void{
         this.capacidadCarga=scapacidadCarga;
  }
  public setautos(scamion:Vehiculo):void{
         this.camion=scamion;
  }
  public settitular(stitular:Titular):void{
         this.titular=stitular;
  }

  
  
  //metodos get

  public getcapacidaCarga():number{
         return this.capacidadCarga
   }
   public getcamion():Vehiculo{
       return this.camion
 }
 public gettitular():Titular{
       return this.titular 
  
 }
}

