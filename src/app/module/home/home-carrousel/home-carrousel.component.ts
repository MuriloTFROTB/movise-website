import { Component } from '@angular/core';
import { ServiceTmdbService } from '../../../core/services/service-tmdb.service';
import { Movie } from '../../../core/interfaces/movie';

@Component({
  selector: 'app-home-carrousel',
  templateUrl: './home-carrousel.component.html',
  styleUrl: './home-carrousel.component.css',
})
export class HomeCarrouselComponent {
  constructor(private MovieService: ServiceTmdbService) {}

  listPopularMovies: Movie[] = [];
  movieSerach = 1858;

  carrouselMovie() {
    this.MovieService.getMovieById(this.movieSerach).subscribe((data) => {
      this.listPopularMovies = [data];
    });
  }
  ngOnInit(): void {
    this.carrouselMovie();
  }
}
