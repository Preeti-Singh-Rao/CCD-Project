import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidueLimits } from './residue-limits';

describe('ResidueLimits', () => {
  let component: ResidueLimits;
  let fixture: ComponentFixture<ResidueLimits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidueLimits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidueLimits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
