
"use strict"
import {Titular }   from "./Titular";
import {Vehiculo}   from "./Vehiculos";

export class Auto{
   
    private Tipo :string;  //tipo sedan, utilitario, SUV etc
    private autos:Vehiculo;//Caracteristicas de fabricacion chasis,motor,patente
    private titular:Titular;//Titulat actual de "autos" (" recordar que contiene patente")

    constructor(ctipo:string,cautos:Vehiculo,ctitular:Titular){
        this.Tipo=ctipo;
        this.autos=cautos;
        this.titular=ctitular;
      

      }
  //metodos set
  
  public settipo(stipo:string):void{
         this.Tipo=stipo;
  }
  public setautos(sautos:Vehiculo):void{
         this.autos=sautos;
  }

  public settitular(stitular:Titular):void{
         this.titular=stitular;
  }

  
  
  //metodos get

  public gettipo():string{
         return this.Tipo
   }
   public getautos():Vehiculo{
       return this.autos
 }
 public gettitular():Titular{
       return this.titular
 }
  
  
}
