import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemDetailsComponent } from './list-item-details.component';

describe('ListItemDetailsComponent', () => {
  let component: ListItemDetailsComponent;
  let fixture: ComponentFixture<ListItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
