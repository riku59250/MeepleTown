import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGamesComponent } from './list-games.component';

describe('ListGamesComponent', () => {
  let component: ListGamesComponent;
  let fixture: ComponentFixture<ListGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
