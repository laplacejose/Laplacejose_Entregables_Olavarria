
"use strict"
import {Titular }   from "./Titular";

 class Auto extends Vehiculo {
   
    private Tipo :string;  //tipo sedan, utilitario, SUV etc
    private titular:Titular;//Titulat actual de "autos" (" recordar que contiene patente")

    constructor(ctipo:string,cpatente:string,cmarca:string,cmodelo:number,cnumeroMotor:number,cchasis:string,ctitular:Titular){
       super(cpatente,cmarca,cmodelo,cnumeroMotor,cchasis)
        this.Tipo=ctipo;
        this.titular=ctitular;
      
      }
  //metodos set
  
  public settipo(stipo:string):void{
         this.Tipo=stipo;
  }


  public settitular(stitular:Titular):void{
         this.titular=stitular;
  }

  
  //metodos get

  public gettipo():string{
         return this.Tipo
   }

 public gettitular():Titular{
       return this.titular
 }
  
  
}
export{Auto}