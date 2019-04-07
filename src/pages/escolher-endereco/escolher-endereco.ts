import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';

@IonicPage()
@Component({
  selector: 'page-escolher-endereco',
  templateUrl: 'escolher-endereco.html',
})
export class EscolherEnderecoPage {

  items: EnderecoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
        idEndereco: "1",
        logradouro: "Rua Quinze de Novembro",
        numero: "300",
        complemento: "Apto 200",
        bairro: "Santa Mônica",
        cep: "48293822",
        cidade: {
          idCidade: "1",
          descricaoCidade: "Uberlândia",
          estado: {
            idEstado: "1",
            descricaoEstado: "Minas Gerais"
          }
        }
      },
      {
        idEndereco: "2",
        logradouro: "Rua Alexandre Toledo da Silva",
        numero: "405",
        complemento: null,
        bairro: "Centro",
        cep: "88933822",
        cidade: {
          idCidade: "3",
          descricaoCidade: "São Paulo",
          estado: {
            idEstado: "2",
            descricaoEstado: "São Paulo"
          }
        }
      }
    ];
  }

}
