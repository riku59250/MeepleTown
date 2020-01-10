import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagegroupComponent } from './pagegroup.component';

describe('PagegroupComponent', () => {
  let component: PagegroupComponent;
  let fixture: ComponentFixture<PagegroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagegroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagegroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
