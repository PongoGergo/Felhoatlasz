/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SzamvitelComponent } from './szamvitel.component';

describe('SzamvitelComponent', () => {
  let component: SzamvitelComponent;
  let fixture: ComponentFixture<SzamvitelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzamvitelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzamvitelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
