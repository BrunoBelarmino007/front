import { Component } from '@angular/core';
import { PetFormComponent } from '../pet-form/pet-form.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    PetFormComponent,
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
