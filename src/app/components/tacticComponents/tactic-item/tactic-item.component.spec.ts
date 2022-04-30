import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticItemComponent } from './tactic-item.component';

describe('TacticItemComponent', () => {
  let component: TacticItemComponent;
  let fixture: ComponentFixture<TacticItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacticItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacticItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
