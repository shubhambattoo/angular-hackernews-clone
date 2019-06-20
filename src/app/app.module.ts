import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { AuthorComponent } from './author/author.component';
import { ShowStoriesComponent } from './show-stories/show-stories.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    AuthorComponent,
    ShowStoriesComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
