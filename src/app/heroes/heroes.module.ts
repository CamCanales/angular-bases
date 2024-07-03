import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';


//permite manejar los modulos del apartado Heroes
//a la vez permite exportarlos
@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  exports: [
    HeroComponent,
    ListComponent,
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule {}
