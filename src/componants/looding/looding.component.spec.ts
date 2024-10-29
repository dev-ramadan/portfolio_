import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoodingComponent } from './looding.component';

describe('LoodingComponent', () => {
  let component: LoodingComponent;
  let fixture: ComponentFixture<LoodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoodingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
