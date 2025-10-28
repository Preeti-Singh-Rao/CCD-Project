import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroPat } from './agro-pat';

describe('AgroPat', () => {
  let component: AgroPat;
  let fixture: ComponentFixture<AgroPat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgroPat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgroPat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
