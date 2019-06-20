import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LoadingComponent } from "./loading/loading.component";
import { AuthorComponent } from "./author/author.component";
import { ShowStoriesComponent } from "./show-stories/show-stories.component";
import { ListItemComponent } from "./list-item/list-item.component";
import { UrlifyPipe } from "./pipes/urlify.pipe";
import { HttpClientModule } from "@angular/common/http";
import { ListItemDetailsComponent } from "./list-item-details/list-item-details.component";
import { CommentCollapsableComponent } from "./comment-collapsable/comment-collapsable.component";
import { ServiceWorkerModule, SwUpdate } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { HackernewsApiService } from './services/hackernews-api.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    AuthorComponent,
    ShowStoriesComponent,
    ListItemComponent,
    UrlifyPipe,
    ListItemDetailsComponent,
    CommentCollapsableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [
    HackernewsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public update: SwUpdate) {
    update.available.subscribe(update => {
      console.log(update);
      console.log("update available");
    });
  }
}
