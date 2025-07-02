import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollarComponent } from './dollar.component';

describe('DollarComponent', () => {
  let component: DollarComponent;
  let fixture: ComponentFixture<DollarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DollarComponent]
    });
    fixture = TestBed.createComponent(DollarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
