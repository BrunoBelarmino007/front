import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PetService } from './pet.service';
import { PetFormComponent } from './pet-form/pet-form.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CadastroComponent,
    LoginComponent,
    NavbarComponent,
    IndexComponent,
    PetFormComponent,
  ],
  providers:[
    PetService,
  ]
})
export class AppModule { }
