import { ItemCadastrarEditarComponent } from './item-cadastrar-editar/item-cadastrar-editar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: ItemCadastrarEditarComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemCadastrarEditarRoutingModule { }
