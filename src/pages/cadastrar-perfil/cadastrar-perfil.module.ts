import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarPerfilPage } from './cadastrar-perfil';

@NgModule({
  declarations: [
    CadastrarPerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarPerfilPage),
  ],
})
export class CadastrarPerfilPageModule {}
