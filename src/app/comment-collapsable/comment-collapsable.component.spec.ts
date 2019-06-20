import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentCollapsableComponent } from './comment-collapsable.component';

describe('CommentCollapsableComponent', () => {
  let component: CommentCollapsableComponent;
  let fixture: ComponentFixture<CommentCollapsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentCollapsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentCollapsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
