import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent  {

  nombre : string = 'David';
  apellido: string = 'Zapata';
  edad: number = 22;
  // private edad: number = 22;

  /*getEdad():number{
    return this.edad;
  }*/

}
