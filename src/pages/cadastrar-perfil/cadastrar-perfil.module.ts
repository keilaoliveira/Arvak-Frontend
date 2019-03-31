import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarPerfilPage } from './cadastrar-perfil';
import { CidadeService } from '../../services/domain/cidade.service';
import { EstadoService } from '../../services/domain/estado.service';

@NgModule({
  declarations: [
    CadastrarPerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarPerfilPage),
  ],
  providers: [
    CidadeService, 
    EstadoService
  ]
})
export class CadastrarPerfilPageModule {}
