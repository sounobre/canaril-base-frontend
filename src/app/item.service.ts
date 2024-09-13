import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { paginacao } from './item/item-listar/item-listar/paginacao';
import { environment } from 'src/environments/environment';
import { ViaCepResult } from './model/ViaCepResult';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl = environment.baseUrl;
  //private baseUrl = 'http://localhost:8080';
  private endpoint = 'cadastro/user';

  constructor(private httpClient: HttpClient) { }

  listar(page = 0, size = 0): Observable<paginacao> {
    const params = new HttpParams()
    .set('page', page)
    .set('size', size);
    return this.httpClient.get<any>(`${this.baseUrl}/${this.endpoint}?${params.toString()}`);
  }

  cadastrar(item: Item): Observable<Item> {
    const { id, ...rest } = item;
    return this.httpClient.post<Item>(`${this.baseUrl}/${this.endpoint}`, rest);
  }

  pesquisarPorId(id: string): Observable<Item> {
    return this.httpClient.get<Item>(`${this.baseUrl}/${this.endpoint}/${id}`);
  }

  atualizar(item: Item): Observable<Item> {
    return this.httpClient.put<Item>(`${this.baseUrl}/${this.endpoint}/${item.id}` , item);
  }

  deletar(item: Item): Observable<Item> {
    return this.httpClient.delete<Item>(`${this.baseUrl}/${this.endpoint}/${item.id}`);
  }

  getEnderecoByCep(cep: string) {
    return this.httpClient.get<ViaCepResult>(`${this.baseUrl}/api/address/cep/${cep}`)
    .pipe(
      map((response) => {
        return response;
      })
    )
  }

}
