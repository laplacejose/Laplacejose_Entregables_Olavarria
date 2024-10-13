
"use strict"

import {Titular }   from "./Titular";
class Camion extends Vehiculo{

    private capacidadCarga :number;
  
    private titular:Titular;

    constructor(ccapacidadCarga:number,cpatente:string,cmarca:string,cmodelo:number,cnumeroMotor:number,cchasis:string,ctitular:Titular){
       super(cpatente,cmarca,cmodelo,cnumeroMotor,cchasis)
        this.capacidadCarga=ccapacidadCarga;
        this.titular=ctitular;
      

      }
  //metodos set
  
  public setcapacidadCarga(scapacidadCarga:number):void{
         this.capacidadCarga=scapacidadCarga;
  }
  
  public settitular(stitular:Titular):void{
         this.titular=stitular;
  }

  
  //metodos get

  public getcapacidaCarga():number{
         return this.capacidadCarga
   }
  
 public gettitular():Titular{
       return this.titular 
  
 }
}

export{Camion};

