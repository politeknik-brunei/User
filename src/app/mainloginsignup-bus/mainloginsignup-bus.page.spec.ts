import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainloginsignupBusPage } from './mainloginsignup-bus.page';

describe('MainloginsignupBusPage', () => {
  let component: MainloginsignupBusPage;
  let fixture: ComponentFixture<MainloginsignupBusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainloginsignupBusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainloginsignupBusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
