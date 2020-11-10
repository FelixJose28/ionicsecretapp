import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mymodel',
  templateUrl: './mymodel.page.html',
  styleUrls: ['./mymodel.page.scss'],
})
export class MymodelPage implements OnInit {

  constructor(public authService: AuthService,
              public modalController: ModalController) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalController.dismiss()
  }


}
