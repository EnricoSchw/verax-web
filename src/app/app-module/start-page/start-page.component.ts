import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (isSubmitted));
  }
}

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {


  publicNameFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(25),
    Validators.minLength(5),
    Validators.pattern(/^([a-zA-Z0-9-_]+)+$/)
  ]);

  userNameFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(25),
    Validators.minLength(5),
    Validators.pattern(/^([a-zA-Z0-9-_]+)+$/)
  ]);

  profileForm = new FormGroup({
    publicName : this.publicNameFormControl,
    userName : this.userNameFormControl
  });

  matcher = new MyErrorStateMatcher();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // [disabled]="!profileForm.valid"
    console.warn(this.publicNameFormControl.errors);
    console.warn(this.profileForm.value);
    console.warn(this.profileForm );
  }
}
