import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {

  @Input()
  valor = 0;

  @Output()
  mudouValor = new EventEmitter();

  decrementar() {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  incrementar() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

}
