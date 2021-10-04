import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductView1Component } from './product-view1.component';

describe('ProductView1Component', () => {
  let component: ProductView1Component;
  let fixture: ComponentFixture<ProductView1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductView1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
