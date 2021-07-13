import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ProfileModule } from '../profile/profile.module';
import { AngularMaterialModule } from '../../angular-material.module';

@NgModule({
  declarations: [
    ContactListComponent
  ],
  exports: [
    ContactListComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ProfileModule
  ]
})
export class ContactsModule { }
