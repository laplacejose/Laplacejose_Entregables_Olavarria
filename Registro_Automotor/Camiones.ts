
"use strict"
import {Vehiculos }   from "./Vehiculos";
import {Titular }   from "./Titular";
class Camiones{

   
    private capacidadCarga :number;
    private camion:Vehiculos;
    private titular:Titular;

    constructor(ccapacidadCarga:number,ccamion:Vehiculos,ctitular:Titular){
        this.capacidadCarga=ccapacidadCarga;
        this.camion=ccamion;
        this.titular=ctitular;
      

      }
  //metodos set
  
  public setcapacidadCarga(scapacidadCarga:number):void{
         this.capacidadCarga=scapacidadCarga;
  }
  public setautos(scamion:Vehiculos):void{
         this.camion=scamion;
  }
  public settitular(stitular:Titular):void{
         this.titular=stitular;
  }

  
  
  //metodos get

  public getcapacidaCarga():number{
         return this.capacidadCarga
   }
   public getcamion():Vehiculos{
       return this.camion
 }
 public gettitular():Titular{
       return this.titular 
  
 }
}

export{Camiones} ;