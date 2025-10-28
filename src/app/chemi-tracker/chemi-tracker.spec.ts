import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemiTracker } from './chemi-tracker';

describe('ChemiTracker', () => {
  let component: ChemiTracker;
  let fixture: ComponentFixture<ChemiTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChemiTracker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChemiTracker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
