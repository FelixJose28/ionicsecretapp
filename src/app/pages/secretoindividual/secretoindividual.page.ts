import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-secretoindividual',
  templateUrl: './secretoindividual.page.html',
  styleUrls: ['./secretoindividual.page.scss'],
})
export class SecretoindividualPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  @Input() secre 

  @Output() borrar = new EventEmitter<number>()

  Borrar(id) {
    console.log('asd')
    this.borrar.emit(id)
  }

}
