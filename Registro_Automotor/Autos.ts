
"use strict"
import {Titular }   from "./Titular";
import {Vehiculos }   from "./Vehiculos";
class Autos{

   
    private Tipo :string;
    private autos:Vehiculos;
    private titular:Titular;

    constructor(ctipo:string,cautos:Vehiculos,ctitular:Titular){
        this.Tipo=ctipo;
        this.autos=cautos;
        this.titular=ctitular;
      

      }
  //metodos set
  
  public settipo(stipo:string):void{
         this.Tipo=stipo;
  }
  public setautos(sautos:Vehiculos):void{
         this.autos=sautos;
  }

  public settitular(stitular:Titular):void{
         this.titular=stitular;
  }

  
  
  //metodos get

  public gettipo():string{
         return this.Tipo
   }
   public getautos():Vehiculos{
       return this.autos
 }
 public gettitular():Titular{
       return this.titular
 }
  
  
}
export{Autos} ;