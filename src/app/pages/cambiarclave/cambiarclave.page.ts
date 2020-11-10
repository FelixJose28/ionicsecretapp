import { Component, OnInit } from '@angular/core';
import { Iusuario } from 'src/app/interfaces/iusuario';
import { AuthService } from '../../services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiarclave',
  templateUrl: './cambiarclave.page.html',
  styleUrls: ['./cambiarclave.page.scss'],
})
export class CambiarclavePage implements OnInit {



  newp: Iusuario = {}
  verificarPass: string = ''
  actualizada: boolean = false
  noMatch: boolean = false
  current: boolean = false

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(){  
  }


  
  changePass() {
      if (this.newp.newpass === this.verificarPass) {
        this.authService.updatePass(this.newp).subscribe(
          res => {
            if (res.msg == 'contrasena actualizada') {
              this.actualizada = true
              this.noMatch = false
              this.current = false
            }
            else {
              this.current = true
            }
          },
          err => {
            console.log(err)
          }
        )
      }
      else {
        this.noMatch = true
      }
      this.router.navigate(['/todosecretos'])
    }
    
  } 
