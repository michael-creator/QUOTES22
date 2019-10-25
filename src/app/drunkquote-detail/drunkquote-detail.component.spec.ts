import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrunkquoteDetailComponent } from './drunkquote-detail.component';

describe('DrunkquoteDetailComponent', () => {
  let component: DrunkquoteDetailComponent;
  let fixture: ComponentFixture<DrunkquoteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrunkquoteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrunkquoteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
