import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackTodayPage } from './track-today.page';

describe('TrackTodayPage', () => {
  let component: TrackTodayPage;
  let fixture: ComponentFixture<TrackTodayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackTodayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackTodayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
