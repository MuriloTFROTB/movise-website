import { Component } from '@angular/core';
import { ServiceTmdbService } from '../../../core/services/service-tmdb.service';
import { Movie } from '../../../core/interfaces/movie';
@Component({
  selector: 'app-home-now-playing',
  templateUrl: './home-now-playing.component.html',
  styleUrl: './home-now-playing.component.css',
})
export class HomeNowPlayingComponent {
  constructor(private MovieService: ServiceTmdbService) {
    this.getPopularMovies()
  }
  listPopularMovies?: Movie[] = [];
  getPopularMovies() {
    this.MovieService.getNowPlaying().subscribe((data) => {
      this.listPopularMovies = data.results;
    });
  }
}
