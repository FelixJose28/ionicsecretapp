import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SecretosService } from 'src/app/services/secretos.service';
import { MymodelPage } from '../mymodel/mymodel.page';

@Component({
  selector: 'app-todosecretos',
  templateUrl: './todosecretos.page.html',
  styleUrls: ['./todosecretos.page.scss'],
})
export class TodosecretosPage implements OnInit {

  secret = []
  
  constructor(private router: Router,
              private secretoService: SecretosService,
              public modalController: ModalController) { }



  ngOnInit(): void {
    this.getSecretos()
  }
  ionViewWillEnter(){
    this.getSecretos()
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: MymodelPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
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
