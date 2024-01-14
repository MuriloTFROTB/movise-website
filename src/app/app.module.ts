import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerieComponent } from './module/serie/serie.component';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './module/home/home-page/home-page.component';
import { HomeCarrouselComponent } from './module/home/home-carrousel/home-carrousel.component';
import { HomeListMoviesComponent } from './module/home/home-list-movies/home-list-movies.component';
import { HomeListSeriesComponent } from './module/home/home-list-series/home-list-series.component';
import { HomeNowPlayingComponent } from './module/home/home-now-playing/home-now-playing.component';

@NgModule({
  declarations: [
    AppComponent,
    SerieComponent,
    TopBarComponent,
    FooterComponent,
    HomePageComponent,
    HomeCarrouselComponent,
    HomeListMoviesComponent,
    HomeListSeriesComponent,
    HomeNowPlayingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,SlickCarouselModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
