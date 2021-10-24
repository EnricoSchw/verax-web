import { Injectable } from '@angular/core';
import { Verax, VeraxConfig } from 'verax-sdk';

@Injectable({
  providedIn: 'root'
})
export class VideoCallService {
  private verax: Verax;

  constructor() {
    const config: VeraxConfig = {
      uri: 'ws://localhost:7000/ws', // signal
      uuid: 'test', // User ID
      authToken: 'string', // Tenant Token
      appToken: 'string' // App Identifier
    };
    this.verax = new Verax(config);
  }

  public startCamera(): Promise<MediaStream>  {
    return this.verax.startCamera();
  }


  public join(room: string): void {
    // this.verax.join(room, (track, stream) => {
    //   console.log(track, stream);
    // });
  }
}
