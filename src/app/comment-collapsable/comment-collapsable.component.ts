import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-comment-collapsable",
  templateUrl: "./comment-collapsable.component.html",
  styleUrls: ["./comment-collapsable.component.scss"]
})
export class CommentCollapsableComponent implements OnInit {
  @Input() comment;

  constructor() {}

  ngOnInit() {
    // console.log(this.kids)
  }
  public isActivated = false;
  public kids = [];
}
