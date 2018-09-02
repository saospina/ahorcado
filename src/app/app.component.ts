import { Component } from '@angular/core';
//Decorador, agrega funcionalidades a la clase de forma externa
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  letras = ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
  palabra = 'yo';
  palabraOculta = '';

  constructor(){
    this.palabraOculta='_ '.repeat(this.palabra.length);
  }
}
