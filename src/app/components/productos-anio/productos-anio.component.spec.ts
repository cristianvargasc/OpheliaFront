import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosAnioComponent } from './productos-anio.component';

describe('ProductosAnioComponent', () => {
  let component: ProductosAnioComponent;
  let fixture: ComponentFixture<ProductosAnioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosAnioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosAnioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
