import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up-page',
  imports: [CommonModule],
  templateUrl: './sign-up-page.html',
  styleUrl: './sign-up-page.css',
})
export class SignUpPage {
  checkboxList=[
    'Lawyer','Patent agent','IPR professional','Legal Firm','Buisness devlopment','Independent Researcher','Research scholar','Academic','Student','Doctor-Physician',
    'Doctor-Core Sciences','Pharmacist','Nurse','other Healthcare Professional','Marketing','Regulatory','Top management','Department Head','Freelancer','Consultant',
    'Director','In House Resource','Librarian','IPR Head','Research Scientist','others'
  ]

}
