import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import QuicesJSON from '../../../assets/json/preguntas-quices.json';
import { QuicesPreguntas } from '../../models/quices-preguntas';

@Component({
  selector: 'app-selector-quices',
  templateUrl: './selector-quices.component.html',
  styleUrls: ['./selector-quices.component.css'],
})
export class SelectorQuicesComponent implements OnInit {
  quices: QuicesPreguntas[] = QuicesJSON;
  @Output() quiz: EventEmitter<QuicesPreguntas> = new EventEmitter();
  @Input() title: string = '';
  @Input() posicion: number[] = [];
  constructor() {}

  ngOnInit(): void {
    this.btnquiz1();
  }
  btnquiz1() {
    this.quiz.emit(this.quices[this.posicion[0]]);
  }
  btnquiz2() {
    this.quiz.emit(this.quices[this.posicion[1]]);
  }
  btnquiz3() {
    this.quiz.emit(this.quices[this.posicion[2]]);
  }
}
