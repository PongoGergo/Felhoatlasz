/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KonyvelesComponent } from './konyveles.component';

describe('KonyvelesComponent', () => {
  let component: KonyvelesComponent;
  let fixture: ComponentFixture<KonyvelesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonyvelesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonyvelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
