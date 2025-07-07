/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KonyvvizsgalatComponent } from './konyvvizsgalat.component';

describe('KonyvvizsgalatComponent', () => {
  let component: KonyvvizsgalatComponent;
  let fixture: ComponentFixture<KonyvvizsgalatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonyvvizsgalatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonyvvizsgalatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
