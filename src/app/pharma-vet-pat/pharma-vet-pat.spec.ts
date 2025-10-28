import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaVetPat } from './pharma-vet-pat';

describe('PharmaVetPat', () => {
  let component: PharmaVetPat;
  let fixture: ComponentFixture<PharmaVetPat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmaVetPat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmaVetPat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
