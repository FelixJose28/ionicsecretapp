import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todosecretos',
  templateUrl: './todosecretos.page.html',
  styleUrls: ['./todosecretos.page.scss'],
})
export class TodosecretosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  crearsecreto(){
    this.router.navigate(['/registrarsecreto'])
  }
}
