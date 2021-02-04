import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
    phoneNumber: new FormControl(null, [Validators.required, Validators.pattern('^[789][0-9]{9}')]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    message: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(255)])
  });

  showMessage = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
      setTimeout(() => {
        this.showMessage = !!this.contactForm.valid;
        this.contactForm.reset();
      }, 2000);
  }

  get name() {
    return this.contactForm.get('name');
  }

  get phoneNumber() {
    return this.contactForm.get('phoneNumber');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

}
