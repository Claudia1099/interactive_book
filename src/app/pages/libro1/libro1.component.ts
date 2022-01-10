import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-libro1',
  templateUrl: './libro1.component.html',
  styleUrls: ['./libro1.component.css']
})
export class Libro1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.efectoLibro();
  }

  efectoLibro(){
    $("#flipbook").turn({
      width: '100%',
      height: '100vh',
      autoCenter: true
  });
  }

}
