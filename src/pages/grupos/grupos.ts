import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GrupoService } from '../../services/domain/grupo.service';
import { GrupoDTO } from '../../models/grupo.dto';
import { API_CONFIG } from '../../config/api.config';

@IonicPage()
@Component({
  selector: 'page-grupos',
  templateUrl: 'grupos.html',
})
export class GruposPage {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;
  items: GrupoDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public grupoService: GrupoService) {
  }



  ionViewDidLoad() {
    this.grupoService.findAll()
      .subscribe(response => {
        this.items = response;
      },
      error => {})
  }

}
