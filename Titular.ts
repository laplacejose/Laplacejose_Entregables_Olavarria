"use strict"

class Titular{
    private nombre:string;
    private dni:number;
   
    constructor(cnombre:string,cdni:number){
      this.nombre=cnombre;
      this.dni=cdni;

    }
//metodos set

public setnombre(snombre:string):void{
    if (snombre.trim()!=""){  //sin espacios no es un dato vacio
 this.nombre=snombre;
}
}
public setdni(sdni:number){
    if (sdni >5000000){      //comparo con valor de referencial
      this.dni=sdni;  
    }
    

}


//metodos get
public getnombre():string{
    return this.nombre
   }
   public getdni():number{

    return this.dni
   }



}

export{Titular} ;