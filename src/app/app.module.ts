import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutUsComponentComponent } from './about-us-component/about-us-component.component';
import { PageComponentComponent } from './page-component/page-component.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { FutureComponentComponent } from './future-component/future-component.component';
import { ReviewsComponentComponent } from './reviews-component/reviews-component.component';
import { TeamComponentComponent } from './team-component/team-component.component';
import { NewsComponentComponent } from './news-component/news-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    HomeComponentComponent,
    AboutUsComponentComponent,
    PageComponentComponent,
    ServiceComponentComponent,
    FutureComponentComponent,
    ReviewsComponentComponent,
    TeamComponentComponent,
    NewsComponentComponent,
    ContactComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
