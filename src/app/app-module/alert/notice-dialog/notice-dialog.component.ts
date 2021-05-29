import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface NoticeDialogData {
  type: 'success' | 'fail' | 'warn';
  msg: string;
}

@Component({
  selector: 'app-notice-dialog',
  templateUrl: './notice-dialog.component.html',
  styleUrls: ['./notice-dialog.component.scss']
})
export class NoticeDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: NoticeDialogData) {
  }

  ngOnInit(): void {
  }

}
