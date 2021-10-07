/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VeicoliDaLavoroComponent } from './veicoli-da-lavoro.component';

describe('VeicoliDaLavoroComponent', () => {
  let component: VeicoliDaLavoroComponent;
  let fixture: ComponentFixture<VeicoliDaLavoroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeicoliDaLavoroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeicoliDaLavoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
