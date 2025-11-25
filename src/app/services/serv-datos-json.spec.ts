import { TestBed } from '@angular/core/testing';

import { ServDatosJson } from './serv-datos-json';

describe('ServDatosJson', () => {
  let service: ServDatosJson;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServDatosJson);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
