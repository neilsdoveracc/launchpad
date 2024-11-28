import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {
  jobForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      company: ['', Validators.required],
      location: ['', Validators.required],
      description: ['']
    });
  }

  onSubmit() {
    if (this.jobForm.valid) {
      console.log('Form submitted:', this.jobForm.value);
      // Here you would typically send the data to a service
      alert('Job submitted successfully!');
      this.jobForm.reset();
    }
  }
}