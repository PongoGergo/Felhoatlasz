import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import emailjs from '@emailjs/browser'; // Assuming you're using EmailJS

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      from_name: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  public sendEmail() {
    if (this.contactForm.valid) {
      emailjs
        .send(
          'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
          'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
          this.contactForm.value,
          'YOUR_PUBLIC_KEY' // Replace with your EmailJS Public Key
        )
        .then(
          (response) => {
            console.log(
              'Email sent successfully!',
              response.status,
              response.text
            );
            alert('Your message has been sent successfully!');
            this.contactForm.reset();
          },
          (error) => {
            console.error('Failed to send email:', error);
            alert('Failed to send message. Please try again later.');
          }
        );
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }

  ngOnInit() {}
}
