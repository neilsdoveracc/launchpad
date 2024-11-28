import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
    additionalInfo: true
  };

  constructor(private fb: FormBuilder) {
    this.jobForm = this.fb.group({
      jrfDate: ['', Validators.required],
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
    }
  }
}