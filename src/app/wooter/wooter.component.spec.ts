import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WooterComponent } from './wooter.component';

describe('WooterComponent', () => {
  let component: WooterComponent;
  let fixture: ComponentFixture<WooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
