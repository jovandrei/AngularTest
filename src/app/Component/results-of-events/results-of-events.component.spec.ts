import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsOfEventsComponent } from './results-of-events.component';

describe('ResultsOfEventsComponent', () => {
  let component: ResultsOfEventsComponent;
  let fixture: ComponentFixture<ResultsOfEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsOfEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsOfEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
