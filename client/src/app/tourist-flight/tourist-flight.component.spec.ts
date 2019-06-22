import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristFlightComponent } from './tourist-flight.component';

describe('TouristFlightComponent', () => {
  let component: TouristFlightComponent;
  let fixture: ComponentFixture<TouristFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
