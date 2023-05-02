import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDobComponent } from './register-dob.component';

describe('RegisterDobComponent', () => {
  let component: RegisterDobComponent;
  let fixture: ComponentFixture<RegisterDobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterDobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
