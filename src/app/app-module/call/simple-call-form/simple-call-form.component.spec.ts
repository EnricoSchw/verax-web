import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCallFormComponent } from './simple-call-form.component';

describe('SimpleCallFormComponent', () => {
  let component: SimpleCallFormComponent;
  let fixture: ComponentFixture<SimpleCallFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleCallFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCallFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
