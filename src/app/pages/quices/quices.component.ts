import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuicesPreguntas } from '../../models/quices-preguntas';

@Component({
  selector: 'app-quices',
  templateUrl: './quices.component.html',
  styleUrls: ['./quices.component.css'],
})
export class QuicesComponent implements OnInit {
  title: string = '';
  posiciones: number[] = [];
  quiz!: QuicesPreguntas;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getDataRoute();
    this.getPosition();
  }

  getDataRoute() {
    this.activatedRoute.data.subscribe((data) => (this.title = data.title));
  }

  getQuiz(quiz: QuicesPreguntas) {
    this.quiz = quiz;
  }

  getPosition() {
    switch (this.title) {
      case 'Book 1':
        this.posiciones = [0, 1, 2];
        return;
      case 'Book 2':
        this.posiciones = [3, 4, 5];
        return;
      case 'Book 3':
        this.posiciones = [6, 7, 8];
        return;
      case 'Book A1':
        this.posiciones = [9, 10, 11];
        return;
      case 'Book 4':
        this.posiciones = [12, 13, 14];
        return;
      case 'Book 5':
        this.posiciones = [15, 16, 17];
        return;
      case 'Book 6':
        this.posiciones = [18, 19, 20];
        return;
      case 'Book A2':
        this.posiciones = [21, 22, 23];
        return;
      case 'Book 7':
        this.posiciones = [24, 25, 26];
        return;
      case 'Book 8':
        this.posiciones = [27, 28, 29];
        return;
      case 'Book 9':
        this.posiciones = [30, 31, 32];
        return;
      case 'Book B1':
        this.posiciones = [33, 34, 35];
        return;
    }
  }
}
