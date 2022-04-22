import {Component} from '@angular/core';

@Component({
    selector:'app-personas',
    templateUrl:'./personas.component.html',
    styleUrls:['./personas.component.css']
    // styles:['h1{color:aqua;}']
})

export class PersonasComponent{
    desabilitar = false;

    mensaje = 'No se ha agreado ninguna persona ';
    titulo ='';

    agregarPersona(){
        this.mensaje = 'Persona Agregada!';
    }

    modificarTitulo(event: Event){
        this.titulo =(<HTMLInputElement>event.target).value;
    }
}
