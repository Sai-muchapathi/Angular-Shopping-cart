import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanIncludeComponent } from './can-include.component';

describe('CanIncludeComponent', () => {
  let component: CanIncludeComponent;
  let fixture: ComponentFixture<CanIncludeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanIncludeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanIncludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
