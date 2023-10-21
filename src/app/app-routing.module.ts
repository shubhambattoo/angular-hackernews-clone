import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShowStoriesComponent } from "./show-stories/show-stories.component";
import { AuthorComponent } from "./author/author.component";
import { ListItemDetailsComponent } from "./list-item-details/list-item-details.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "news/1" },
  {
    path: "news/:page",
    component: ShowStoriesComponent,
    data: { feed: "news" }
  },
  {
    path: "newstories/:page",
    data: { feed: "newest" },
    component: ShowStoriesComponent
  },
  {
    path: "beststories/:page",
    data: { feed: "best" },
    component: ShowStoriesComponent
  },
  {
    path: "askstories/:page",
    data: { feed: "ask" },
    component: ShowStoriesComponent
  },
  {
    path: "showstories/:page",
    data: { feed: "show" },
    component: ShowStoriesComponent
  },
  {
    path: "jobstories/:page",
    data: { feed: "jobs" },
    component: ShowStoriesComponent
  },
  { path: "user/:username", component: AuthorComponent },
  { path: "item", component: ListItemDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled", initialNavigation: 'enabledBlocking' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
