/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EbikeComponent } from './ebike.component';

describe('EbikeComponent', () => {
  let component: EbikeComponent;
  let fixture: ComponentFixture<EbikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
