import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEstimadoComponent } from './cliente-estimado.component';

describe('ClienteEstimadoComponent', () => {
  let component: ClienteEstimadoComponent;
  let fixture: ComponentFixture<ClienteEstimadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteEstimadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteEstimadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
