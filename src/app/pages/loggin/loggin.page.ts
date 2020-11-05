import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Iusuario } from 'src/app/interfaces/iusuario';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.page.html',
  styleUrls: ['./loggin.page.scss'],
})
export class LogginPage implements OnInit {

  user: Iusuario ={}
  
  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }
  
  logginUser(){
    this.authService.authlogearse(this.user)
      .subscribe(
        res =>{
          console.log(res)
          this.router.navigate(['/todosecretos'])
          localStorage.setItem('token',res['token'])


        },
        err => console.log(err)
      )
  }
}
