import { TestBed } from '@angular/core/testing';

import { ProductosAnioService } from './productos-anio.service';

describe('ProductosAnioService', () => {
  let service: ProductosAnioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosAnioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
