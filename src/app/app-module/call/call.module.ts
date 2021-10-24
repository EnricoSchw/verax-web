import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleCallFormComponent } from './components/simple-call-form/simple-call-form.component';
import { AngularMaterialModule } from '../../angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from '../alert/alert.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { CallComponent } from './components/call/call.component';
import { DeviceSelectionDialogComponent } from './components/device-selection-dialog/device-selection-dialog.component';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};

@NgModule({
  declarations: [
    SimpleCallFormComponent,
    CallComponent,
    DeviceSelectionDialogComponent
  ],
  exports: [
    SimpleCallFormComponent,
    CallComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AlertModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    }
    // ... other providers like services
  ]
})
export class CallModule { }
