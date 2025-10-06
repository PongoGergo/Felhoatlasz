import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
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
import { ProgressSpinnerModule } from 'primeng/progressspinner';

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
    ProgressSpinnerModule,
    CommonModule,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  showDialog = false;
  formClicked = false;
  private isBrowser: boolean;

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.contactForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(1)]],
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required, Validators.minLength(1)]],
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
          'iIEJLMsmD3Sbftu13' // Replace with your EmailJS Public Key
        )
        .then(
          (response) => {
            this.showDialog = true;
            this.contactForm.reset();
            this.contactForm.markAsUntouched();
            this.contactForm.markAsPristine();
            this.contactForm.updateValueAndValidity();
            this.formClicked = false;
          },
          (error) => {}
        );
    } else {
      this.contactForm.updateValueAndValidity();
    }
  }
  private scrollY = 0;

  onDialogShow() {
    if (!this.isBrowser) return;

    if (this.isBrowser) {
      const root = document.querySelector('app-root');
      if (root) root.classList.remove('no-scroll');
    }
    // Lock scroll and preserve current scroll position
    this.scrollY = window.scrollY || document.documentElement.scrollTop;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${this.scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
  }

  onDialogHide() {
    if (!this.isBrowser) return;

    // Unlock scroll and restore position
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    window.scrollTo(0, this.scrollY);
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

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
