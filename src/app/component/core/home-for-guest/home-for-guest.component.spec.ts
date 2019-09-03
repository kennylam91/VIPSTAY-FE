import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeForGuestComponent } from './home-for-guest.component';

describe('HomeForGuestComponent', () => {
  let component: HomeForGuestComponent;
  let fixture: ComponentFixture<HomeForGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeForGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeForGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
