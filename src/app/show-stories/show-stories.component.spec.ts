import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStoriesComponent } from './show-stories.component';

describe('ShowStoriesComponent', () => {
  let component: ShowStoriesComponent;
  let fixture: ComponentFixture<ShowStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
