import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHostComponent } from './register-host.component';

describe('RegisterHostComponent', () => {
  let component: RegisterHostComponent;
  let fixture: ComponentFixture<RegisterHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
