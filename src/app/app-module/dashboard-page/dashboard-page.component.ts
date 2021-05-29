import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  opened = true;
  // tslint:disable-next-line:variable-name
  @ViewChild('sidenav', { static: true }) private _sidenav: MatSidenav | any;

  constructor() {

  }

  ngOnInit(): void {
    if (window.innerWidth < 599) {
      this._sidenav.fixedTopGap = 0;
      this._sidenav.fixedBottomGap = 56;
      this.opened = false;
    } else {
      this._sidenav.fixedTopGap = 64;
      this._sidenav.fixedBottomGap = 0;
      this.opened = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (event.target.innerWidth < 599) {
      this._sidenav.fixedTopGap = 0;
      this._sidenav.fixedBottomGap = 56  ;
      this.opened = false;
    } else {
      this._sidenav.fixedTopGap = 64;
      this._sidenav.fixedBottomGap = 0;
      this.opened = true;
    }
  }

  isBiggerScreen(): boolean {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }

  public get sidenav(): MatSidenav {
    return this._sidenav;
  }

  public set sidenav(value: MatSidenav) {
    this._sidenav = value;
  }
}
