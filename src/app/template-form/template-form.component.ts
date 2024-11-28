import { Component } from '@angular/core';
import { Student } from '../models/student.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  studentObj: Student = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zip: '',
    isAcceptedTerm: false,
  };
}
