import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticCardComponent } from './tactic-card.component';

describe('TacticCardComponent', () => {
  let component: TacticCardComponent;
  let fixture: ComponentFixture<TacticCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacticCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacticCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
