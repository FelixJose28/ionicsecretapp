import { Component, OnInit } from '@angular/core';
import { Iusuario } from '../../interfaces/iusuario';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private router: Router, 
              private authService: AuthService) { }

  ngOnInit() {
  }
  user: Iusuario = {}
  samepass: string = ''

  registrarUser(){
    if(this.user.clave === this.samepass){
        this.authService.authregistrar(this.user)
          .subscribe(
            res => {
              if(res['StatusCode'] == 200)
              console.log(res)
              this.router.navigate(['/todosecretos'])
            }
        ,
          err => console.log(err)
        )
    }else{
      console.log('contrasenas no validas')
    }
  }

}
