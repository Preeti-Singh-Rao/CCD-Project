import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickPatent } from './quick-patent';

describe('QuickPatent', () => {
  let component: QuickPatent;
  let fixture: ComponentFixture<QuickPatent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickPatent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickPatent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
