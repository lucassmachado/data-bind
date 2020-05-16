import { Component, EventEmitter, Output, Input, ElementRef, ViewChild } from '@angular/core';

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

  @ViewChild('campoInput')
  campoValorInput: ElementRef;

  decrementar() {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  incrementar() {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }

}
