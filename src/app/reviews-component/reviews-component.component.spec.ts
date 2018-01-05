import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsComponentComponent } from './reviews-component.component';

describe('ReviewsComponentComponent', () => {
  let component: ReviewsComponentComponent;
  let fixture: ComponentFixture<ReviewsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
