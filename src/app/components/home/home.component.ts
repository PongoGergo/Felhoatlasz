import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import emailjs from '@emailjs/browser'; // Assuming you're using EmailJS

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, RouterModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  heroSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    slideBy: 1,
    items: 1, // fallback
    navText: [
      '<i class="far fa-long-arrow-left"></i>',
      '<i class="far fa-long-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
  };
  eventOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoWidth: true,
    margin: 25,
    navSpeed: 1000,
    slideBy: 1,
    items: 1, // fallback
    navText: [
      '<i class="far fa-angle-left"></i>',
      '<i class="far fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
  };
  departmentOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoWidth: true,
    margin: 25,
    navSpeed: 1000,
    slideBy: 1,
    items: 1, // fallback
    navText: [
      '<i class="far fa-angle-left"></i>',
      '<i class="far fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
  };
  testimonialOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoWidth: true,
    margin: 25,
    navSpeed: 1000,
    slideBy: 1,
    items: 1, // fallback
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
  };
  partnerOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoWidth: true,
    margin: 25,
    navSpeed: 1000,
    slideBy: 1,
    items: 1, // fallback
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
  };
  contactForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', Validators.required],
      tax_num: ['', Validators.required],
      answer1: ['', Validators.required],
    });
  }

  public sendEmail() {
    if (this.contactForm.valid) {
      emailjs
        .send(
          'service_p1poi47', // Replace with your EmailJS Service ID
          'template_x9ejqxi', // Replace with your EmailJS Template ID - Ajánlat Tempalte ID
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
