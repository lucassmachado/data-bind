import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {

  url = 'https://loiane.training/';

  cursoAngular = true;

  urlImagem = 'https://www.itexto.com.br/devkico/wp-content/uploads/2016/04/angular-js_600x400.png';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

}
