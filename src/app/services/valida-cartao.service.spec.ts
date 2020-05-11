import { TestBed } from '@angular/core/testing';

import { ValidaCartaoService } from './valida-cartao.service';

describe('ValidaCartaoService', () => {
  let service: ValidaCartaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidaCartaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
