import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/clientes.service';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[]=[]// array de clientes vazio

  constructor(private service:ClientesService) { 

  }

  ngOnInit(): void {
    this.service
    .getClientes()
    .subscribe(resposta => this.clientes= resposta);
  }

}
