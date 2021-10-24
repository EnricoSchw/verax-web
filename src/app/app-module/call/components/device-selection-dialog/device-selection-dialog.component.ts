import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface SelectData {
  visible: false;
  videoDevices: [];
  audioDevices: [];
  audioOutputDevices: [];
  resolution: settings.resolution;
  bandwidth: settings.bandwidth,
  selectedAudioDevice: settings.selectedAudioDevice,
  selectedVideoDevice: settings.selectedVideoDevice,
  codec: settings.codec,
  isDevMode: settings.isDevMode,
}


@Component({
  selector: 'app-device-selection-dialog',
  templateUrl: './device-selection-dialog.component.html',
  styleUrls: ['./device-selection-dialog.component.scss']
})

export class DeviceSelectionDialogComponent implements OnInit {

  videoDevices: any[] = [];
  audioDevices: any[] = [];
  audioOutputDevices: any[] = [];

  settings = {
    resolution: undefined,
    bandwidth: undefined,
    selectedAudioDevice: undefined,
    selectedVideoDevice: undefined,
    codec: undefined,
    isDevMode: undefined,
  };

  constructor(
    public dialogRef: MatDialogRef<DeviceSelectionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  public ngOnInit() {
    try {
      window.AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      (window as any).audioContext = new AudioContext();
    } catch (e) {
      console.log('Web Audio API not supported.');
    }
  }

  updateInputDevices = () => {
    return new Promise((pResolve, pReject) => {
      const videoDevices: any = [];
      const audioDevices: any = [];
      const audioOutputDevices: any = [];

      navigator.mediaDevices.enumerateDevices()
        .then((devices) => {
          for (const device of devices) {
            if (device.kind === 'videoinput') {
              videoDevices.push(device);
            } else if (device.kind === 'audioinput') {
              audioDevices.push(device);
            } else if (device.kind === 'audiooutput') {
              audioOutputDevices.push(device);
            }
          }
        }).then(() => {
          const data = {videoDevices, audioDevices, audioOutputDevices};
          pResolve(data);
      });
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
