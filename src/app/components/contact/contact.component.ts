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
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  public sendEmail() {
    if (this.contactForm.valid) {
      emailjs
        .send(
          'service_p1poi47', // Replace with your EmailJS Service ID
          'template_94k3zt5', // Replace with your EmailJS Template ID - Kapcsolat Tempalte ID
          this.contactForm.value,
          'aPvCY-7RKUvMLvp5K' // Replace with your EmailJS Public Key
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
