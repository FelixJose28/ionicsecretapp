import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SecretosService } from 'src/app/services/secretos.service';
import { Isecreto } from 'src/app/interfaces/isecreto';

@Component({
  selector: 'app-registrarsecreto',
  templateUrl: './registrarsecreto.page.html',
  styleUrls: ['./registrarsecreto.page.scss'],
})
export class RegistrarsecretoPage implements OnInit {

  secreto: Isecreto = {
    token: localStorage.getItem('token')
  }

  constructor(private router: Router,
              private secretosService: SecretosService) { }

  ngOnInit() {
  }
  regitrarSecreto(){
    this.secretosService.authregistrarSecreto(this.secreto)
    .subscribe(res=>{
      if(res['Mensaje'] == 'secreto registrado'){
        this.router.navigate(['/todosecretos'])
      }
    },err=>{console.log(err)}
    )
  }

}
