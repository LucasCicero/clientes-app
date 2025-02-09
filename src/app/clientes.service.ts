import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) {}

   salvar(cliente:Cliente) : Observable<Cliente>{// modulo que transforma sua aplicação js em reativa(reage quando tiver uma resposta do servidor)
      return this.http.post<Cliente>('http://localhost:8080/api/clientes',cliente)
   } 

   atualizar(cliente:Cliente) : Observable<any>{//any pq no backend retorna void
    return this.http.put<Cliente>(`http://localhost:8080/api/clientes/${cliente.id}`, cliente)
 } 

 deletar(cliente:Cliente) : Observable<any>{
  return this.http.delete<any>(`http://localhost:8080/api/clientes/${cliente.id}`)
} 

    getClientes() : Observable<Cliente[]>{
      return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
    }

    getClientebyId(id: number) : Observable<Cliente> {
      return this.http.get<any>(`http://localhost:8080/api/clientes/${id}`);

    }

}
