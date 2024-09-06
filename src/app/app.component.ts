import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PetService } from './pet.service';
import { PetFormComponent } from './pet-form/pet-form.component';
import { IndexComponent } from './index/index.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HttpClientModule,
    CadastroComponent,
    LoginComponent,
    NavbarComponent,
    IndexComponent,
    PetFormComponent,
  ],
  providers:[
    PetService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'front-api-pet';
}
