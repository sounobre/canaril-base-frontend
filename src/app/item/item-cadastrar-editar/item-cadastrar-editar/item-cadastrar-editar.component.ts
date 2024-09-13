import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/item.model';
import { ItemService } from 'src/app/item.service';
import { State } from 'src/app/model/state.model';

@Component({
  selector: 'app-item-cadastrar-editar',
  templateUrl: './item-cadastrar-editar.component.html',
  styleUrls: ['./item-cadastrar-editar.component.css'],
})
export class ItemCadastrarEditarComponent implements OnInit {

  formGroup!: FormGroup;
  item!: Item;
  states: State[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ){}

  ngOnInit() {
    this.httpClient.get<State[]>('../../../assets/state.json')
    .subscribe((states: State[]) => {
      this.states = states;
    });

    this.item = this.activatedRoute.snapshot.data["item"];
    this.formGroup = this.formBuilder.group({
      id: [(this.item && this.item.id) ? this.item.id : null],
      name: [ (this.item && this.item.name) ? this.item.name : "", Validators.required],
      document: [ (this.item && this.item.document) ? this.item.document : "", Validators.required],
      sex: [ (this.item && this.item.sex) ? this.item.sex : "", Validators.required],
      dataNascimento: [ (this.item && this.item.dataNascimento) ? this.item.dataNascimento : "", Validators.required],

      address: this.formBuilder.group({
        complement: [(this.item && this.item.address && this.item.address.complement) ? this.item.address.complement : ""],
        cep: [(this.item && this.item.address && this.item.address.cep) ? this.item.address.cep : ""],
        neighborhood: [(this.item && this.item.address && this.item.address.neighborhood) ? this.item.address.neighborhood : ""],
        street: [ (this.item && this.item.address && this.item.address.street) ? this.item.address.street : "", Validators.required],
        number: [ (this.item && this.item.address && this.item.address.number) ? this.item.address.number : "", Validators.required],

          city: this.formBuilder.group({
            name: [this.item?.address?.city?.name || "", Validators.required],
            state: this.formBuilder.group({
              id: [this.item?.address?.city?.state?.id || "", Validators.required]
            }),
          }),
      }),
    });
  }

  salvar(){

    if(this.item && this.item.id){
      this.itemService.atualizar(this.formGroup.value).subscribe(
        itemAtualizado => {
          this.router.navigateByUrl("/itens");
        },
        error => {
          alert("Erro ao atualizar " + JSON.stringify(error))
        }
      );

    } else {
      this.itemService.cadastrar(this.formGroup.value).subscribe(
        itemCadastrado => {
          this.router.navigateByUrl("/itens");
        },
        error => {
          alert("Erro ao cadastrar " + JSON.stringify(error))
        }
      );
    }

  }

  deletar(){
    if(confirm("Deseja deletar o item" + this.item.name)){
      this.itemService.deletar(this.item).subscribe(
        itemAtualizado => {
          this.router.navigateByUrl("/itens");
        },
        error => {
          alert("Erro ao deletar " + JSON.stringify(error))
        }
      );

    }
  }

}
