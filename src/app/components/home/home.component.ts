import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { InputMaskModule } from 'primeng/inputmask';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
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
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselModule,
    RouterModule,
    ReactiveFormsModule,
    InputMaskModule,
    FloatLabelModule,
    TextareaModule,
    InputTextModule,
    InputNumberModule,
    InputGroupModule,
    InputGroupAddonModule,
    DialogModule,
    ButtonModule,
    MessageModule,
  ],
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
  showDialog = false;
  formClicked = false;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      companyName: [null, Validators.required, Validators.minLength(1)],
      directorName: [null, Validators.required, Validators.minLength(1)],
      email: [null, [Validators.required, Validators.email]],
      tel: [null, Validators.required, Validators.minLength(1)],
      tax_num: [null, Validators.required, Validators.minLength(1)],
      answer1: [null, Validators.required, Validators.minLength(1)],
      answer2: [null, Validators.required, Validators.minLength(1)],
      answer3: [null, Validators.required, Validators.minLength(1)],
      answer4: [null, Validators.required, Validators.minLength(1)],
      answer5: [null, Validators.required, Validators.minLength(1)],
    });
  }

  public sendEmail() {
    this.formClicked = true;
    if (this.contactForm.valid) {
      emailjs
        .send(
          'service_ei0exzo', // Replace with your EmailJS Service ID
          'template_gx9zdhp', // Replace with your EmailJS Template ID - Ajánlat Tempalte ID
          this.contactForm.value,
          'iIEJLMsmD3Sbftu13' // Replace with your EmailJS Public Key
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

  get companyName() {
    return this.contactForm.get('companyName')!;
  }
  get directorName() {
    return this.contactForm.get('directorName')!;
  }
  get email() {
    return this.contactForm.get('email')!;
  }
  get tel() {
    return this.contactForm.get('tel')!;
  }
  get tax_num() {
    return this.contactForm.get('tax_num')!;
  }
  get answer1() {
    return this.contactForm.get('answer1')!;
  }
  get answer2() {
    return this.contactForm.get('answer2')!;
  }
  get answer3() {
    return this.contactForm.get('answer3')!;
  }
  get answer4() {
    return this.contactForm.get('answer4')!;
  }
  get answer5() {
    return this.contactForm.get('answer5')!;
  }
  ngOnInit() {}
}
