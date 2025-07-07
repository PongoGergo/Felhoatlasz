/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PenzugyiComponent } from './penzugyi.component';

describe('PenzugyiComponent', () => {
  let component: PenzugyiComponent;
  let fixture: ComponentFixture<PenzugyiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenzugyiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenzugyiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
