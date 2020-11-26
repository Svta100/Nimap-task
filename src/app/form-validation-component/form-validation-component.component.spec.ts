import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationComponentComponent } from './form-validation-component.component';

describe('FormValidationComponentComponent', () => {
  let component: FormValidationComponentComponent;
  let fixture: ComponentFixture<FormValidationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
