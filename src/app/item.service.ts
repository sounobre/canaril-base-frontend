import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl = 'http://localhost:3000';
  private endpoint = 'itens';

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(`${this.baseUrl}/${this.endpoint}`);
  }

  cadastrar(item: Item): Observable<Item> {
    return this.httpClient.post<Item>(`${this.baseUrl}/${this.endpoint}`, item);
  }

  pesquisarPorId(id: string): Observable<Item> {
    return this.httpClient.get<Item>(`${this.baseUrl}/${this.endpoint}/${id}`);
  }

  atualizar(item: Item): Observable<Item> {
    return this.httpClient.delete<Item>(`${this.baseUrl}/${this.endpoint}/${item.id}`);
  }
}
