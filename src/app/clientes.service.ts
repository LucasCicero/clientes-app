import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { 

  }

   salvar(cliente:Cliente) : Observable<Cliente>{// modulo que transforma sua aplicação js em reativa(reage quando tiver uma resposta do servidor)
      return this.http.post<Cliente>('http://localhost:8080/api/clientes',cliente)
   } 

    getClientes() : Observable<Cliente[]>{
      return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
    }



}
