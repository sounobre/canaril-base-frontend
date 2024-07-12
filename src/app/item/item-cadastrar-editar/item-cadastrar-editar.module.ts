import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemCadastrarEditarRoutingModule } from './item-cadastrar-editar-routing.module';
import { ItemCadastrarEditarComponent } from './item-cadastrar-editar/item-cadastrar-editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    ItemCadastrarEditarComponent
  ],
  imports: [
    CommonModule,
    ItemCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class ItemCadastrarEditarModule { }
