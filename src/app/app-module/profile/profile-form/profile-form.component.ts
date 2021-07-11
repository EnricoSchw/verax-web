import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ProfileService } from '../provider/profile.service';
import { Observable } from 'rxjs';
import { Profile } from '../entity/profile';
import { tap, filter, map } from 'rxjs/operators';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (isSubmitted));
  }
}

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

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

  idFormControl = new FormControl('', []);

  profileForm = new FormGroup({
    publicName: this.publicNameFormControl,
    userName: this.userNameFormControl,
    id: this.idFormControl
  });

  matcher = new MyErrorStateMatcher();

  profile$: Observable<Profile> | undefined;

  constructor(
    private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.profile$ = this.profileService.fetchMyProfile().pipe(
      map(profile => profile === undefined ? {} as Profile : profile),
      tap(profile => this.profileForm.patchValue(profile))
    );
  }

  onSubmit(): void {
    if (this.profileForm.valid && this.profile$) {
      this.profileService.update(this.profileForm.value);
    }
  }
}
