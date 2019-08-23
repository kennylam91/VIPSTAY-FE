import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeForHostComponent } from './home-for-host.component';

describe('HomeForHostComponent', () => {
  let component: HomeForHostComponent;
  let fixture: ComponentFixture<HomeForHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeForHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeForHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
