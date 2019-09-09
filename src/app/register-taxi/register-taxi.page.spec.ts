import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTaxiPage } from './register-taxi.page';

describe('RegisterTaxiPage', () => {
  let component: RegisterTaxiPage;
  let fixture: ComponentFixture<RegisterTaxiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterTaxiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTaxiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
