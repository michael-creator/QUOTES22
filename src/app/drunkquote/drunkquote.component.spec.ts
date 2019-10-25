import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrunkquoteComponent } from './drunkquote.component';

describe('DrunkquoteComponent', () => {
  let component: DrunkquoteComponent;
  let fixture: ComponentFixture<DrunkquoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrunkquoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrunkquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
