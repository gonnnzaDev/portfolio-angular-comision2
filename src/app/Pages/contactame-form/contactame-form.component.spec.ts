import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactameFormComponent } from './contactame-form.component';

describe('ContactameFormComponent', () => {
  let component: ContactameFormComponent;
  let fixture: ComponentFixture<ContactameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactameFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
