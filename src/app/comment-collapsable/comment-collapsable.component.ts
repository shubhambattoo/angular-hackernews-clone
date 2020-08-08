import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-comment-collapsable",
  templateUrl: "./comment-collapsable.component.html",
  styleUrls: ["./comment-collapsable.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class CommentCollapsableComponent implements OnInit {
  @Input() comment;

  constructor() {}

  ngOnInit() {
  }
  public isActivated = false;
  public kids = [];
}
