import { Component } from '@angular/core';
import { MymodelPage } from '../mymodel/mymodel.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {}
  async openModal() {
    const modal = await this.modalController.create({
      component: MymodelPage,
      cssClass: 'my-custom-class'
    });
    console.log('asd')
    return await modal.present();
  }

}
