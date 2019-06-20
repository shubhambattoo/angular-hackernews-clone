import { Component, OnInit } from "@angular/core";
import { HackernewsApiService } from "../services/hackernews-api.service";
import { ActivatedRoute } from "@angular/router";
import { User } from '../models/user.model';

@Component({
  selector: "app-author",
  templateUrl: "./author.component.html",
  styleUrls: ["./author.component.scss"]
})
export class AuthorComponent implements OnInit {
  public user;
  public username;
  public grabbingContent = true;
  public created;
  public thisYear = new Date().getFullYear();

  constructor(
    private apiService: HackernewsApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.username = this.route.snapshot.params.username
    this.getAuthor(this.username)
  }

  getAuthor(id) {
    this.apiService.getAuthor(id).subscribe(
      (data: User) => {
        // console.log(data)
        this.user = data;
        // this.created = moment.unix(parseInt(this.user.created)).fromNow()
        // console.log(this.created)
        this.grabbingContent = false;
      },
      err => console.log(err)
    );
  }
}
