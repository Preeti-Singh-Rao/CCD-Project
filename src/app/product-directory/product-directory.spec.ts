import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDirectory } from './product-directory';

describe('ProductDirectory', () => {
  let component: ProductDirectory;
  let fixture: ComponentFixture<ProductDirectory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDirectory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDirectory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
