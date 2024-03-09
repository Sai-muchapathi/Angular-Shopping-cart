import { TestBed } from '@angular/core/testing';

import { FetchUsersService } from './fetch-users.service';

describe('FetchUsersService', () => {
  let service: FetchUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
