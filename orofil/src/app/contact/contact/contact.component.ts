import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.form.valid) {
      // Send the form data using your preferred method (e.g. email, HTTP request, etc.)
      console.log(this.form.value);
    } else {
      // Mark all form controls as touched to show validation errors
      this.form.markAllAsTouched();
    }
  }
    

}
