import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface Pet {
  id?: number;
  nome: string;
  raca: string;
  historico?: string;
  sexo: 'M' | 'F';
}

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private apiUrl = 'https://api-de-pets.com';  // Substitua pela URL da sua API

  constructor(private http: HttpClient) {}

  listarPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.apiUrl}/pets`);
  }

  cadastrarPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(`${this.apiUrl}/pets`, pet);
  }

  atualizarPet(id: number, pet: Partial<Pet>): Observable<Pet> {
    return this.http.put<Pet>(`${this.apiUrl}/pets/${id}`, pet);
  }

  excluirPet(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/pets/${id}`);
  }
}
