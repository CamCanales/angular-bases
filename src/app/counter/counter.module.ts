import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

//permite manejar el counter component como un módulo
//y a la vez nos permite exportar el modulo fuera de la carpeta counter
@NgModule({
  declarations:[
    CounterComponent

  ],
  exports:[
    CounterComponent
  ]
})
export class CounterModule{


}


