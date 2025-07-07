/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdotanacsadasComponent } from './adotanacsadas.component';

describe('AdotanacsadasComponent', () => {
  let component: AdotanacsadasComponent;
  let fixture: ComponentFixture<AdotanacsadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdotanacsadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdotanacsadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
