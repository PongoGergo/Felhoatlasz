import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InputMaskModule } from 'primeng/inputmask';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import { InputTextModule } from 'primeng/inputtext';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import emailjs from '@emailjs/browser'; // Assuming you're using EmailJS
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    InputMaskModule,
    FloatLabelModule,
    InputTextModule,
    TextareaModule,
    DialogModule,
    ButtonModule,
    MessageModule,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  showDialog = false;
  formClicked = false;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: [null, Validators.required, Validators.minLength(1)],
      email: [null, [Validators.required, Validators.email]],
      message: [null, Validators.required, Validators.minLength(1)],
    });
  }

  public sendEmail() {
    this.formClicked = true;
    if (this.contactForm.valid) {
      emailjs
        .send(
          'service_ei0exzo', // Replace with your EmailJS Service ID
          'template_hzqkt8a', // Replace with your EmailJS Template ID - Kapcsolat Tempalte ID
          this.contactForm.value,
          '3fJzdMT0h3UVGcglh' // Replace with your EmailJS Public Key
        )
        .then(
          (response) => {
            this.showDialog = true;
            this.contactForm.reset();
          },
          (error) => {}
        );
    } else {
      this.contactForm.updateValueAndValidity();
    }
  }

  get name() {
    return this.contactForm.get('name')!;
  }
  get email() {
    return this.contactForm.get('email')!;
  }
  get message() {
    return this.contactForm.get('message')!;
  }
  ngOnInit() {}
}
