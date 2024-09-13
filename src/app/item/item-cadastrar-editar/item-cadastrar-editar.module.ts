import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ItemCadastrarEditarRoutingModule } from './item-cadastrar-editar-routing.module';
import { ItemCadastrarEditarComponent } from './item-cadastrar-editar/item-cadastrar-editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    ItemCadastrarEditarComponent
  ],
  imports: [
    CommonModule,
    ItemCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ]
})
export class ItemCadastrarEditarModule { }
