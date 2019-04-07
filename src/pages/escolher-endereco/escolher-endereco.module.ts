import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscolherEnderecoPage } from './escolher-endereco';
import { PedidoService } from '../../services/domain/pedido.service';

@NgModule({
  declarations: [
    EscolherEnderecoPage,
  ],
  imports: [
    IonicPageModule.forChild(EscolherEnderecoPage),
  ],
})
export class EscolherEnderecoPageModule {}
