
"use strict"
import {Titular }   from "./Titular";
import {Vehiculo }   from "./Vehiculos";

export class Moto{

    private Cilindrada :number;
    private motos:Vehiculo;
    private titular:Titular;

    constructor(ccilindrada:number,cmotos:Vehiculo,ctitular:Titular){
        this.Cilindrada=ccilindrada;
        this.motos=cmotos;
        this.titular=ctitular;
      

      }
  //metodos set
  
  public setcilindrada(scilindrada:number):void{
         this.Cilindrada=scilindrada;
  }
  public setautos(smotos:Vehiculo):void{
         this.motos=smotos;
  }

  public settitular(stitular:Titular):void{
         this.titular=stitular;
  }

  
  
  //metodos get

  public getcilindrada():number{
         return this.Cilindrada
   }
   public getmotos():Vehiculo{
       return this.motos
 }
 public gettitular():Titular{
       return this.titular
 }
  
  
}
