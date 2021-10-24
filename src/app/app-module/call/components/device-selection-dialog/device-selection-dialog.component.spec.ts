import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceSelectionDialogComponent } from './device-selection-dialog.component';

describe('DeviceSelectionDialogComponent', () => {
  let component: DeviceSelectionDialogComponent;
  let fixture: ComponentFixture<DeviceSelectionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceSelectionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
