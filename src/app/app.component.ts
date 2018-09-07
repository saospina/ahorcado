import { Component } from '@angular/core';
// Decorador, agrega funcionalidades a la clase de forma externa
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
  intentos = 0;
  gano = false;
  perdio = false;

  constructor() {
    this.palabraOculta = '_ '.repeat(this.palabra.length);
  }
  comprobar(letra) {
    this.existeLetra(letra);
    console.log('letra', letra);
    const palabraOcultaArr = this.palabraOculta.split(' ');
    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === letra) {
        palabraOcultaArr[i] = letra;
      }
    }
    this.palabraOculta = palabraOcultaArr.join(' ');
    this.verificaGane();
  }
  verificaGane() {
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');

    if (palabraEvaluar === this.palabra) {
      this.gano = true;
      console.log('Usuario GANADOR');

    }

    if (this.intentos >= 9) {
      this.perdio = true;
      console.log('Usuario PERDEDOR');
    }



  }
  /* indexof retorna la posicion de la letra que encuentre */
  existeLetra(letra) {
    if (this.palabra.indexOf(letra) >= 0) {
      console.log('existe letra', letra);
    } else {
      console.log('letra no existe', letra);
      this.intentos++;
    }
  }
}
