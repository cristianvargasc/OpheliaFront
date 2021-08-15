import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosMinComponent } from './productos-min.component';

describe('ProductosMinComponent', () => {
  let component: ProductosMinComponent;
  let fixture: ComponentFixture<ProductosMinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosMinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
