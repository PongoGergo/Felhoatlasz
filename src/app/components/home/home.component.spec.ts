/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FőoldalComponent } from './Főoldal.component';

describe('FőoldalComponent', () => {
  let component: FőoldalComponent;
  let fixture: ComponentFixture<FőoldalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FőoldalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FőoldalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
