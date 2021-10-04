import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProductView1Component } from './sub-product-view1.component';

describe('SubProductView1Component', () => {
  let component: SubProductView1Component;
  let fixture: ComponentFixture<SubProductView1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubProductView1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubProductView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
