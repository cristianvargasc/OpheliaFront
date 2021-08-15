import { TestBed } from '@angular/core/testing';

import { ClientesEdadFechaService } from './clientes-edad-fecha.service';

describe('ClientesEdadFechaService', () => {
  let service: ClientesEdadFechaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesEdadFechaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
