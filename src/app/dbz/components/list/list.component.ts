import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  //con solo poner el decorador "Input" ya se puede obtener la información desde el main Page
  @Input()
  public characterList: Character[] = [{
    name:'Trunks',
    power: 10
  }
  ];

  //evento que permitirá eliminar un elemento de la lista
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index?:string):void{
    //ToDo: Emitir el ID del personaje

    if(!index) return;

    //console.log(index);

    this.onDelete.emit(index); //emite el evento pasando el id como argumento
  }

}
