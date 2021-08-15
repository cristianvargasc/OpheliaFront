import { TestBed } from '@angular/core/testing';

import { ClienteEstimadoService } from './cliente-estimado.service';

describe('ClienteEstimadoService', () => {
  let service: ClienteEstimadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteEstimadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
