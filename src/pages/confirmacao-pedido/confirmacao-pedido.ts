import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PedidoDTO } from '../../models/pedido.dto';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/domain/cart.service';
import { ClienteDTO } from '../../models/cliente.dto';
import { EnderecoDTO } from '../../models/endereco.dto';
import { ClienteService } from '../../services/domain/cliente.service';
import { PedidoService } from '../../services/domain/pedido.service';

@IonicPage()
@Component({
  selector: 'page-confirmacao-pedido',
  templateUrl: 'confirmacao-pedido.html',
})
export class ConfirmacaoPedidoPage {
  
  pedido: PedidoDTO;
  cartItems: CartItem[]; 
  cliente: ClienteDTO;
  endereco: EnderecoDTO;
  codPedido: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cartService: CartService,
    public clienteService: ClienteService,
    public pedidoService: PedidoService,
    public loadingCtrl: LoadingController) {

    this.pedido = this.navParams.get('pedido');

  }

  ionViewDidLoad() {
    this.cartItems = this.cartService.getCart().items;

    this.clienteService.findById(this.pedido.cliente.idCliente)
      .subscribe(response => {
        this.cliente = response as ClienteDTO;
        this.endereco = this.findEndereco(this.pedido.enderecoDeEntrega.idEndereco, response['enderecos']);
      },
      error => {
        this.navCtrl.setRoot('HomePage');
      });
  }

  private findEndereco(idEndereco: string, list: EnderecoDTO[]) : EnderecoDTO{
    let position = list.findIndex(x => x.idEndereco == idEndereco);
    return list[position];
  }

  total(){
    return this.cartService.total();
  }

  back(){
   this.navCtrl.setRoot('CartPage'); 
  }

  home(){
    this.navCtrl.setRoot('GruposPage'); 
   }

  checkout(){
    let loader = this.presentLoading();
    this.pedidoService.insert(this.pedido)
      .subscribe(response => {
        this.cartService.createOrClearCart();
        this.codPedido = this.extractId(response.headers.get('location'));
        loader.dismiss();
      }, 
      error => {
        if (error.status == 403){
          loader.dismiss();
          this.navCtrl.setRoot('HomePage');
        }
      });
  }

  private extractId(location: string) : string {
      let position = location.lastIndexOf('/');
      return location.substring(position + 1, location.length);
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    loader.present();
    return loader;
  }

}
