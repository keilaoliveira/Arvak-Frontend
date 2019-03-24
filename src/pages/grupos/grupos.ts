import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GrupoService } from '../../services/domain/grupo.service';

@IonicPage()
@Component({
  selector: 'page-grupos',
  templateUrl: 'grupos.html',
})
export class GruposPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public grupoService: GrupoService) {
  }



  ionViewDidLoad() {
    this.grupoService.findAll()
      .subscribe(response => {
        console.log(response);
      },
      error => {
        console.log(error);
      })
  }

}
