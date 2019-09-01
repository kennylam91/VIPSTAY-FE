import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingOfUserComponent } from './booking-of-user.component';

describe('BookingOfUserComponent', () => {
  let component: BookingOfUserComponent;
  let fixture: ComponentFixture<BookingOfUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingOfUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
