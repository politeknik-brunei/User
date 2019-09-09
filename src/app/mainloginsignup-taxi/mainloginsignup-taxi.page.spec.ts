import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainloginsignupTaxiPage } from './mainloginsignup-taxi.page';

describe('MainloginsignupTaxiPage', () => {
  let component: MainloginsignupTaxiPage;
  let fixture: ComponentFixture<MainloginsignupTaxiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainloginsignupTaxiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainloginsignupTaxiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
