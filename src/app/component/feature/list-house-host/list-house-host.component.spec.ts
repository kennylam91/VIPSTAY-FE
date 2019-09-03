import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHouseHostComponent } from './list-house-host.component';

describe('ListHouseHostComponent', () => {
  let component: ListHouseHostComponent;
  let fixture: ComponentFixture<ListHouseHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHouseHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHouseHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
