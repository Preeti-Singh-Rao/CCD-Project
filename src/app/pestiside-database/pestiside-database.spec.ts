import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PestisideDatabase } from './pestiside-database';

describe('PestisideDatabase', () => {
  let component: PestisideDatabase;
  let fixture: ComponentFixture<PestisideDatabase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PestisideDatabase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PestisideDatabase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
