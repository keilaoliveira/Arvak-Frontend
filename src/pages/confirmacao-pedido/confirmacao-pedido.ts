import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidoDTO } from '../../models/pedido.dto';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/domain/cart.service';
import { ClienteDTO } from '../../models/cliente.dto';
import { EnderecoDTO } from '../../models/endereco.dto';
import { ClienteService } from '../../services/domain/cliente.service';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cartService: CartService,
    public clienteService: ClienteService) {

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

}
