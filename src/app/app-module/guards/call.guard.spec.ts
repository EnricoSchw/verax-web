import { TestBed } from '@angular/core/testing';

import { CallGuard } from './call.guard';

describe('CallGuard', () => {
  let guard: CallGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CallGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
