import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplesMaterialComponent } from './exemples-material.component';

describe('ExemplesMaterialComponent', () => {
  let component: ExemplesMaterialComponent;
  let fixture: ComponentFixture<ExemplesMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemplesMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplesMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
