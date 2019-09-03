import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderForHostComponent } from './header-for-host.component';

describe('HeaderForHostComponent', () => {
  let component: HeaderForHostComponent;
  let fixture: ComponentFixture<HeaderForHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderForHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderForHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
