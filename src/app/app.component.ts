import { Component } from '@angular/core';
//Decorador, agrega funcionalidades a la clase de forma externa
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
  palabra = 'AGUACATE';
  palabraOculta = ' ';

  constructor() {
    this.palabraOculta = '_ '.repeat(this.palabra.length);
  }
  comprobar(letra) {
    console.log('letra', letra);
    const palabraOcultaArr = this.palabraOculta.split(' ');
    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === letra)  {
        palabraOcultaArr[i] = letra;
      }
    }
    this.palabraOculta = palabraOcultaArr.join(' ');
  }
}
