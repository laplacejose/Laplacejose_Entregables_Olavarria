
"use strict"
import {Titular }   from "./Titular";
import {Vehiculos }   from "./Vehiculos";
class Motos{

   
    private Cilindrada :number;
    private motos:Vehiculos;
    private titular:Titular;

    constructor(ccilindrada:number,cmotos:Vehiculos,ctitular:Titular){
        this.Cilindrada=ccilindrada;
        this.motos=cmotos;
        this.titular=ctitular;
      

      }
  //metodos set
  
  public setcilindrada(scilindrada:number):void{
         this.Cilindrada=scilindrada;
  }
  public setautos(smotos:Vehiculos):void{
         this.motos=smotos;
  }

  public settitular(stitular:Titular):void{
         this.titular=stitular;
  }

  
  
  //metodos get

  public getcilindrada():number{
         return this.Cilindrada
   }
   public getmotos():Vehiculos{
       return this.motos
 }
 public gettitular():Titular{
       return this.titular
 }
  
  
}
export{Motos} ;