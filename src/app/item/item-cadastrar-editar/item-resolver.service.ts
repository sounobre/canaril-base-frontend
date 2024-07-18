import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { EMPTY } from 'rxjs';
import { Item } from 'src/app/item.model';
import { ItemService } from 'src/app/item.service';

@Injectable({
  providedIn: 'root'
})
export class ItemResolverService implements Resolve<Item> {

  constructor(private itemService: ItemService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const id = route.params["id"];
    if(id) {
      this.itemService.pesquisarPorId(id);
    }
    return EMPTY;
  }


}
