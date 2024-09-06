import { Component } from '@angular/core';
import { PetService } from '../pet.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

interface Pet {
  id?: number;
  nome: string;
  raca: string;
  historico?: string;
  sexo: 'M' | 'F';
}

@Component({
  selector: 'app-pet-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
  ],
  providers:[
    PetService,
  ],
  templateUrl: './pet-form.component.html',
  styleUrl: './pet-form.component.css'
})

export class PetFormComponent {
  pets: Pet[] = [];
  novoPet: Pet = { nome: '', raca: '', historico: '', sexo: 'M' };
  petAtualizar: Partial<Pet> = {};
  idExcluir: number | undefined;

  constructor(private petService: PetService) {}

  listarPets() {
    this.petService.listarPets().subscribe(pets => {
      this.pets = pets;
    });
  }

  cadastrarPet() {
    this.petService.cadastrarPet(this.novoPet).subscribe(pet => {
      this.pets.push(pet);
      this.novoPet = { nome: '', raca: '', historico: '', sexo: 'M' };
    });
  }

  atualizarPet() {
    if (this.petAtualizar.id) {
      this.petService.atualizarPet(this.petAtualizar.id, this.petAtualizar).subscribe(() => {
        this.listarPets();
        this.petAtualizar = {};
      });
    }
  }

  excluirPet() {
    if (this.idExcluir !== undefined) {
      this.petService.excluirPet(this.idExcluir).subscribe(() => {
        this.listarPets();
      });
    }
  }

  limparLista() {
    this.pets = [];
  }
}
