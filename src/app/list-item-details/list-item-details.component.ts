import { Component, OnInit } from "@angular/core";
import { HackernewsApiService } from '../services/hackernews-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-list-item-details",
  templateUrl: "./list-item-details.component.html",
  styleUrls: ["./list-item-details.component.scss"]
})
export class ListItemDetailsComponent implements OnInit {
  constructor(
    private apiService: HackernewsApiService,
    private route: ActivatedRoute
  ) {}

  public itemDetails;
  public grabbing = true;
  ngOnInit() {
    const id = this.route.snapshot.queryParams.id;
    this.getDeatils(id);
  }

  getDeatils(id) {
    this.apiService.getItem(id).subscribe(data => {
      // console.log(data)
      this.itemDetails = data;
      this.grabbing = false;
    });
  }
}
