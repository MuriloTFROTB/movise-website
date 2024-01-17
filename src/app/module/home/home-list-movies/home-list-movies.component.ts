import { Component } from '@angular/core';
import { ServiceTmdbService } from '../../../core/services/service-tmdb.service';
import { Movie } from '../../../core/interfaces/movie';

@Component({
  selector: 'app-home-list-movies',
  templateUrl: './home-list-movies.component.html',
  styleUrl: './home-list-movies.component.css'
})
export class HomeListMoviesComponent {
  constructor(private MovieService: ServiceTmdbService) {
    this.getPopularMovies();
  }
  listPopularMovies?: Movie[] = [];

  getPopularMovies() {
    this.MovieService.getPopularMovies().subscribe((data) => {
      this.listPopularMovies = data.results;
    });
  }
  goToMovieDetails(movieId: number) {
    // Faça o que quiser com o ID, como exibir no console
    console.log("ID do filme:", movieId);
  }
}
