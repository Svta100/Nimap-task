import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentslistcomponentComponent } from './studentslistcomponent.component';

describe('StudentslistcomponentComponent', () => {
  let component: StudentslistcomponentComponent;
  let fixture: ComponentFixture<StudentslistcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentslistcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentslistcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
