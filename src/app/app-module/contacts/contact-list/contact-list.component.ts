import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile/provider/profile.service';

import { MatTableDataSource } from '@angular/material/table';
import { ProfileType } from '../../profile/entity/profile';

export interface PeriodicElement {
  publicName: string;
  position: number;
  userName: string;
  type: ProfileType;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, publicName: 'Hydrogen', userName: 'userName1', type: ProfileType.CONTACT},
  {position: 2, publicName: 'Helium', userName: 'userName1', type: ProfileType.CONTACT},
  {position: 3, publicName: 'Lithium', userName: 'userName1', type: ProfileType.CONTACT},
  {position: 4, publicName: 'Beryllium', userName: 'userName1', type: ProfileType.CONTACT},
  {position: 5, publicName: 'Boron', userName: 'userName1', type: ProfileType.CONTACT},
  {position: 6, publicName: 'Carbon', userName: 'userName1', type: ProfileType.CONTACT},
  {position: 7, publicName: 'Nitrogen', userName: 'userName1', type: ProfileType.CONTACT},
  {position: 8, publicName: 'Oxygen', userName: 'userName1', type: ProfileType.CONTACT},
  {position: 9, publicName: 'Fluorine', userName: 'userName1', type: ProfileType.CONTACT},
  {position: 10, publicName: 'Neon', userName: 'userName1', type: ProfileType.CONTACT}
];


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  displayedColumns: string[] = ['avatar', 'publicName', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private profileService: ProfileService) {
  }

  ngOnInit(): void {
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public call(element: PeriodicElement): void {
    alert(element.position);
  }

  public getAvatar(name: string): string {
    let initials = name.charAt(0).toUpperCase();

    for (let i = 1; i < name.length; i++) {
      if (name.charAt(i) === ' ') {
        continue;
      }

      if (name.charAt(i) === name.charAt(i).toUpperCase()) {
        initials += name.charAt(i);
        if (initials.length === 2) {
          break;
        }
      }
      if (initials.length === 1) {
        initials += name.charAt(1).toUpperCase();
      }
    }
    return initials;
  }
}

