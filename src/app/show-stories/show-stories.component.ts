import { Component, OnInit } from "@angular/core";
import { Story } from "../models/story.model";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { HackernewsApiService } from "../services/hackernews-api.service";
import { LocalstorageService } from "../services/localstorage.service";

@Component({
  selector: "app-show-stories",
  templateUrl: "./show-stories.component.html",
  styleUrls: ["./show-stories.component.scss"],
})
export class ShowStoriesComponent implements OnInit {
  stories: Story[];
  feed: string;
  pageNum: number;
  listStart: number;
  routerLink: string;
  grabbingContent = true;

  constructor(
    private apiService: HackernewsApiService,
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private localstorageService: LocalstorageService
  ) {}

  ngOnInit() {
    if (!this.localstorageService.getItem("theme")) {
      this.localstorageService.setItem("theme", "default");
    }

    this.feed = this.activatedRoute.snapshot.data.feed;

    this.activatedRoute.url.subscribe(
      (data) => (this.routerLink = data[0].path)
    );

    this.activatedRoute.params.subscribe((params) => {
      this.grabbingContent = true;
      this.pageNum = params["page"] ? +params["page"] : 1;
      this.getFeed(this.feed, this.pageNum);
    });

    this.title.setTitle(`${this.feed} | HackerNews-Clone`);
  }

  getFeed(feed, pgNum) {
    return this.apiService.getFeed(feed, pgNum).subscribe(
      (data) => {
        this.stories = data;
        // console.log(this.stories)
        this.grabbingContent = false;
      },
      (err) => console.log(err),
      () => {
        this.listStart = (this.pageNum - 1) * 30 + 1;
        window.scrollTo(0, 0);
      }
    );
  }
}
