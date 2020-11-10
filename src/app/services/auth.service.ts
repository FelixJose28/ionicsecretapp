import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController, ModalController} from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL ='http://127.0.0.1:8000/api'

  constructor(private http: HttpClient,
              private router: Router,
              private alertController: AlertController,
              private modalController: ModalController) { }

  authregistrar(user){
    return this.http.post<any>(this.URL+'/registrar',user);
  }
  authlogearse(user){
    return this.http.post<any>(this.URL+'/login',user);
  }
  authestaLoggeado(){
    if(localStorage.getItem('token') != null){
      return true
    }
  }
  authGetToken(){
    return localStorage.getItem('token')
  }
  async authLogout(){
    const myalertvalue = await  this.alertController.create({
      header: 'Session',
      message: 'Desea cerrar session?',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Si',
          handler: () =>{
            localStorage.removeItem('token')
            this.router.navigate(['/home'])
            this.modalController.dismiss()
          }
        }
      ]
    });
    await myalertvalue.present();

    
  }
  authCambiarDatos(user){
    return this.http.put<any>(this.URL+'/modificardatosusuario/'+user.id,user)
  }
}
