import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroPharm } from './agro-pharm';

describe('AgroPharm', () => {
  let component: AgroPharm;
  let fixture: ComponentFixture<AgroPharm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgroPharm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgroPharm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
