import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketMasterFormComponent } from './ticket-master-form.component';

describe('TicketMasterFormComponent', () => {
  let component: TicketMasterFormComponent;
  let fixture: ComponentFixture<TicketMasterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketMasterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketMasterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
