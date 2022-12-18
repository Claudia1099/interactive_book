import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { QuicesPreguntas } from '../../models/quices-preguntas';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css'],
})
export class CuestionarioComponent implements OnInit {
  @Input() preguntas!: QuicesPreguntas;
  validadorOpcion: boolean[] = [];
  cantidadBuenas: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.getLengthQuestion();
  }

  getLengthQuestion() {
    this.preguntas.quiz.forEach(() => {
      this.validadorOpcion.push(false);
    });
  }
  valor() {
    this.cantidadBuenas = 0;
    this.validadorOpcion.map((valor) => {
      if (valor === true) {
        this.cantidadBuenas++;
      }
    });
  }
  handlerChange(e: any, position: number) {
    this.validadorOpcion[position] = eval(e.target.value);
  }
}
