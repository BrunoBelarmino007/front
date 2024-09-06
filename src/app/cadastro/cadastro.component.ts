import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    NavbarComponent,
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})

export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup;
  isFormValid: boolean = false;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      nameValue: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      sameValue: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      emailValue: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'
          ),
        ],
      ],
      passwordValue: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.cadastroForm.valueChanges.subscribe(() => {
      this.isFormValid = this.cadastroForm.valid;
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log('Formulário Enviado:', this.cadastroForm.value);
      // Redirecionar ou realizar outras ações.
    }
  }

  handleReset() {
    this.cadastroForm.reset();
  }
}
