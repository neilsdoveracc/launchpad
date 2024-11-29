import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {
  jobForm: FormGroup;

  sections: { [key: string]: boolean } = {
    jobDetails: true,
    projectDetails: true,
    additionalInfo: true,
    roleDetails : true
  };

  todayDate: any;
  
  getToday(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-indexed
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  constructor(private fb: FormBuilder , private router: Router) {
    this.jobForm = this.fb.group({
      jrfDate: [{ value: this.getToday(), disabled: true }],
      jobTitle: ['', Validators.required],
      department: ['', Validators.required],
      project: [''],
      managerName: [''],
      location: [''],
      employmentType: [''],
      contractDuration: [''],
      numPositions: ['']
    });
  }

  toggleSection(section: keyof typeof this.sections) {
    this.sections[section] = !this.sections[section];
  }

  onSubmit() {
    if (this.jobForm.valid) {
      console.log('Form submitted:', this.jobForm.value);
      alert('Job submitted successfully!');
      this.jobForm.reset();  
      this.router.navigate(['/home/view']);    
    }
  }
}