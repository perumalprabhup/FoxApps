import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureComponentComponent } from './future-component.component';

describe('FutureComponentComponent', () => {
  let component: FutureComponentComponent;
  let fixture: ComponentFixture<FutureComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
