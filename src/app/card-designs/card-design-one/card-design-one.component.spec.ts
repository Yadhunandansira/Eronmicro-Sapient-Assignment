import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDesignOneComponent } from './card-design-one.component';

describe('CardDesignOneComponent', () => {
  let component: CardDesignOneComponent;
  let fixture: ComponentFixture<CardDesignOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDesignOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDesignOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
