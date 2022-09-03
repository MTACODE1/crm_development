import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridJobManagerComponent } from './ag-grid-job-manager.component';

describe('AgGridJobManagerComponent', () => {
  let component: AgGridJobManagerComponent;
  let fixture: ComponentFixture<AgGridJobManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridJobManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridJobManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
