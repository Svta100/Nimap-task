import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentscomponentComponent } from './studentscomponent.component';

describe('StudentscomponentComponent', () => {
  let component: StudentscomponentComponent;
  let fixture: ComponentFixture<StudentscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentscomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
