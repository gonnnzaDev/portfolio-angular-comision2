import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudEspecificoComponent } from './solicitud-especifico.component';

describe('SolicitudEspecificoComponent', () => {
  let component: SolicitudEspecificoComponent;
  let fixture: ComponentFixture<SolicitudEspecificoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudEspecificoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudEspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
