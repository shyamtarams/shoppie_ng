import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSideNavComponent } from './seller-side-nav.component';

describe('SellerSideNavComponent', () => {
  let component: SellerSideNavComponent;
  let fixture: ComponentFixture<SellerSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerSideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
