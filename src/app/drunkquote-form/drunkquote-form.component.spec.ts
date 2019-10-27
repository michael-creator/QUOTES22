import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrunkquoteFormComponent } from './drunkquote-form.component';

describe('DrunkquoteFormComponent', () => {
  let component: DrunkquoteFormComponent;
  let fixture: ComponentFixture<DrunkquoteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrunkquoteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrunkquoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
