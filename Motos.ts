
"use strict"
import {Titular }   from "./Titular";
import { Vehiculo } from "./Vehiculos";

 class Moto extends Vehiculo{

    private Cilindrada :number;
    private titular:Titular;

    constructor(ccilindrada:number,cpatente:string,cmarca:string,cmodelo:number,cnumeroMotor:number, cchasis:string,ctitular:Titular){
       super(cpatente,cmarca,cmodelo,cnumeroMotor,cchasis)
        this.Cilindrada=ccilindrada;
        this.titular=ctitular;

      }
  //metodos set
  
  public setcilindrada(scilindrada:number):void{
         this.Cilindrada=scilindrada;
  }
  
  public settitular(stitular:Titular):void{
         this.titular=stitular;
  }

 
  //metodos get

  public getcilindrada():number{
         return this.Cilindrada
   }

 public gettitular():Titular{
       return this.titular
 }
  
  
}
export{Moto};
