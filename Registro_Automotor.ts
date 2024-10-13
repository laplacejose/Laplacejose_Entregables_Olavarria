
import {Titular }   from "./Titular";
import {Auto}   from "./Autos";
import {Moto}   from "./Motos";
import {Camion }   from "./Camiones";

 export class Registro_Automotor{
        private numeroRegistro:number;        // no inicializo variables al inicio.
        private registroAutos:Auto[];         //lista de objetos tipo Auto.
        private registroMotos:Moto[];         //lista de objetos tipo Moto.
        private registroCamiones:Camion[];    //lista de objetos tipo Camion.

constructor(cnumeroRegistro:number){
    this.numeroRegistro=cnumeroRegistro;    // se crea con su numero de registro.Aqui se inicializan variables.
    this.registroAutos=[];                  //inicializa con lista vacia.
    this.registroMotos=[];                  //inicializa con lista vacia.
    this.registroCamiones=[];               //inicializa con lista vacia.

}

//Metodos seters..

public cargarnumeroRegistro(numReg:number):void{
  this.numeroRegistro=numReg;
  
}

public cargarRegistroAutos(dataAuto:Auto):void{
    this.registroAutos.push(dataAuto);
 
  }
public cargarRegistroMotos(dataMoto:Moto):void{
  this.registroMotos.push(dataMoto);
  

}
public cargarRegistroCamiones(dataCamion:Camion):void{
    this.registroCamiones.push(dataCamion);
   
  }

// Metodos geters....

public mostrarnumeroRegistro():number{
  return  this.numeroRegistro;

}


public mostrarRegistroAutos():Auto[]{
    return  this.registroAutos;
  
  }

  public mostrarRegistroMotos():Moto[]{
    return  this.registroMotos;
  
  }


public mostrarRegistroCamiones():Camion[]{
    return  this.registroCamiones;
  
  }


}
