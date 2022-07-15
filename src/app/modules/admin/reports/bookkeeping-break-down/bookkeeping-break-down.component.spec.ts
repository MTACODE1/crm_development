import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookkeepingBreakDownComponent } from './bookkeeping-break-down.component';

describe('BookkeepingBreakDownComponent', () => {
  let component: BookkeepingBreakDownComponent;
  let fixture: ComponentFixture<BookkeepingBreakDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookkeepingBreakDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookkeepingBreakDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
