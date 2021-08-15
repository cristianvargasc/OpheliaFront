import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesEdadFechaComponent } from './clientes-edad-fecha.component';

describe('ClientesEdadFechaComponent', () => {
  let component: ClientesEdadFechaComponent;
  let fixture: ComponentFixture<ClientesEdadFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesEdadFechaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesEdadFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
