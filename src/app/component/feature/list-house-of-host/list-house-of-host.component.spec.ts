import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHouseOfHostComponent } from './list-house-of-host.component';

describe('ListHouseOfHostComponent', () => {
  let component: ListHouseOfHostComponent;
  let fixture: ComponentFixture<ListHouseOfHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHouseOfHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHouseOfHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
