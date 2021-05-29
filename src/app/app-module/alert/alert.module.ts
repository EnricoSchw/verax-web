import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeDialogComponent } from './notice-dialog/notice-dialog.component';
import { AngularMaterialModule } from '../../angular-material.module';



@NgModule({
  declarations: [
    NoticeDialogComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ]
})
export class AlertModule { }
