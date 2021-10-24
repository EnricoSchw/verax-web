import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CallEntity } from '../../entity/CallEntity';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormErrorStateMatcher } from '../../../utils/form/form-error-state-matcher';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simple-call-form',
  templateUrl: './simple-call-form.component.html',
  styleUrls: ['./simple-call-form.component.scss']
})
export class SimpleCallFormComponent implements OnInit {

  callEntity$: Observable<CallEntity> | undefined;

  roomFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(25),
    Validators.minLength(5),
    Validators.pattern(/^([a-zA-Z0-9-_]+)+$/)
  ]);

  callForm = new FormGroup({
    room: this.roomFormControl
  });

  matcher = new FormErrorStateMatcher();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.callForm.valid) {
      this.router.navigateByUrl('/call');
    }
  }

  randomString(strLength: number): void {
    const result = [];
    strLength = strLength || 5;
    const charSet = 'abcdefghijklmnoprstuvwxyz';
    while (strLength--) {
      result.push(charSet.charAt(Math.floor(Math.random() * charSet.length)));
    }

    this.callForm.controls.room.setValue(result.join(''));
  }
}
