import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/item.model';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-item-listar',
  templateUrl: './item-listar.component.html',
  styleUrls: ['./item-listar.component.css']
})
export class ItemListarComponent {

  itens$: Observable<Item[]> | undefined;

  colunasTabela = ['id', 'nome'];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.listarItens();
  }

  listarItens(){
    this.itens$ = this.itemService.listar();
  }

}
