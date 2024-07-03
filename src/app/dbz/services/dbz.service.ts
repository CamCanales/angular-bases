import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


//Injectable le dice a angular que lo trate como un servicio
@Injectable({
  providedIn: 'root'
})
export class DbzService {

 public characters:Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000,
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  },
  {
    id: uuid(),
    name: 'Mr. Popo',
    power: 500
  },
  ];

  addCharacter( Character:Character ):void{
    //agrega el character con spread operator (...Character)
    const newCharacter:Character  = {
      id:uuid(),
      ...Character
    }

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index:number){
  //   this.characters.splice(index, 1); //splice, borramos todo lo que sigue pero solo 1 elemento

  deleteCharacterById(id:string){
    //retorna un nuevo arreglo de characteres filtrando los elementos que sean distinto al ID que queremos elminar
    this.characters = this.characters.filter( character => character.id !== id)

  }



}

