import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalRoutes } from './technical-routes';

describe('TechnicalRoutes', () => {
  let component: TechnicalRoutes;
  let fixture: ComponentFixture<TechnicalRoutes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalRoutes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalRoutes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
