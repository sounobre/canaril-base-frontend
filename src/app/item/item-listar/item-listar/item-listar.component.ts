import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Item } from 'src/app/item.model';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-item-listar',
  templateUrl: './item-listar.component.html',
  styleUrls: ['./item-listar.component.css']
})
export class ItemListarComponent {
  dataSource = new MatTableDataSource<Item>();

  itens$!: Observable<{
    page: any; content: Item[]; totalElements: number;
}>;

  colunasTabela = [
    'id',
    'name',
    'document',
    'address',
    'addressNumber',
    'sex',
    'dataNascimento'
  ];

  totalElements = 0;
  page = 0;
  size = 10;
  pageSizeOptions : number[] = [10, 20];
   // content: Item[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.listarItens(this.page, this.size);
  }

  listarItens(page = 0, size = 0){
    this.itens$ = this.itemService.listar(page, size);
    this.itens$.subscribe(data => {
      this.dataSource.data = data.content;
    //  console.log(data.content)
      this.totalElements = data.page.totalElements;
    //  console.log(data.page)
    });


  }

  paginar(event: PageEvent){
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.listarItens(this.page, this.size);

    console.log(this.page);
    console.log(this.size);
   // console.log(this.listarItens);

  }

}
