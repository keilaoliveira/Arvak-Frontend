import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastrar-perfil',
  templateUrl: 'cadastrar-perfil.html',
})
export class CadastrarPerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  signupUser(){
    console.log('Enviou o form');
  }

}
