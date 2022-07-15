import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VatBreakDownComponent } from './vat-break-down.component';

describe('VatBreakDownComponent', () => {
  let component: VatBreakDownComponent;
  let fixture: ComponentFixture<VatBreakDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VatBreakDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VatBreakDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
