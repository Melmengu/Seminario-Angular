import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapriccioSucursalesComponent } from './capriccio-sucursales.component';

describe('CapriccioSucursalesComponent', () => {
  let component: CapriccioSucursalesComponent;
  let fixture: ComponentFixture<CapriccioSucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapriccioSucursalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapriccioSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
