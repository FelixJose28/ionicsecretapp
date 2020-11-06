import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecretosService } from 'src/app/services/secretos.service';

@Component({
  selector: 'app-todosecretos',
  templateUrl: './todosecretos.page.html',
  styleUrls: ['./todosecretos.page.scss'],
})
export class TodosecretosPage implements OnInit {

  secret = []
  
  constructor(private router: Router,
              private secretoService: SecretosService) { }



  ngOnInit(): void {
    this.getSecretos()
  }
  registrarCuenta(){
    this.router.navigate(["/registrarsecreto"])
  }

  delete(id) {
    this.secretoService.authborrarSecreto(id).subscribe(
        res => {
          this.getSecretos()
          console.log(res)
        },
        err => console.log(err)
      )
  }

  getSecretos(){
    this.secretoService.authgetSecreto().subscribe(
      res => {
        this.secret = res.ApiSecretos
      },
      err => console.log(err)
    )
  }

}
