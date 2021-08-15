import { TestBed } from '@angular/core/testing';

import { ProductosMinService } from './productos-min.service';

describe('ProductosMinService', () => {
  let service: ProductosMinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosMinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
