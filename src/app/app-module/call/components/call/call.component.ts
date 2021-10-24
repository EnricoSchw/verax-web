import { Component, OnInit } from '@angular/core';
import { VideoCallService } from '../../provider/video-call.service';
import { MatDialog } from '@angular/material/dialog';
import { DeviceSelectionDialogComponent } from '../device-selection-dialog/device-selection-dialog.component';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent implements OnInit {

  constructor(private videoCall: VideoCallService, public dialog: MatDialog) { }


  openDialog(): void {
    const dialogRef = this.dialog.open(DeviceSelectionDialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

  ngOnInit(): void {
    this.videoCall.startCamera().then(mediaStream => {
      const local = document.getElementById('local-video') as HTMLVideoElement;
      local.srcObject = mediaStream;
      local.autoplay = true;
      local.controls = false;
      local.muted = true;
    });
  }

}
