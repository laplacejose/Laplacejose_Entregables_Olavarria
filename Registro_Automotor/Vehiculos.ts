"use strict"

 export class Vehiculo {
    //lista de atributos para objeto Vehiculos
   
    private patente:string;
    private marca:string;// Marca del vehiculo
    private modelo:number;// año de fabricacion 
    private numeroMotor:number;
    private chasis:string;
   
   


    constructor(cpatente:string,cmarca:string,cmodelo:number, cnumeroMotor:number,cchasis:string){
        this.patente=cpatente;
        this.marca=cmarca;
        this.modelo=cmodelo;
        this.numeroMotor=cnumeroMotor;
        this.chasis=cchasis;
        
  
      }
  //metodos set
  public setnumeroPatente(spatente:string):void{
       this.patente=spatente;
}
  
  public setmarca(smarca:string):void{
         this.marca=smarca;
  }
  public setmodelo(smodelo:number):void{
         this.modelo=smodelo;
  
  }

  public setnumeroMotor(snumeroMotor:number):void{
         this.numeroMotor=snumeroMotor;

 }
 public setchasis(schasis:string):void{
       this.chasis=schasis;

}




  //metodos get

   public getpatente():string{
          return this.patente
   }

   public getmarca():string{
          return this.marca;
   
   }
 
   public getmodelo():number{
          return this.modelo;
   }
 
    public getnumeroMotor():number{
          return this.numeroMotor
   }
   
   public getChasis():string{
          return this.chasis;
   
   }
 

}
