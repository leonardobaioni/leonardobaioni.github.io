/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContattiComponent } from './contatti.component';

describe('ContattiComponent', () => {
  let component: ContattiComponent;
  let fixture: ComponentFixture<ContattiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContattiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
