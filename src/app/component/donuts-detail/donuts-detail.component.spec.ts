import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutsDetailComponent } from './donuts-detail.component';

describe('DonutsDetailComponent', () => {
  let component: DonutsDetailComponent;
  let fixture: ComponentFixture<DonutsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
