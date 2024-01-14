import { Component } from '@angular/core';
import { ServiceTmdbService } from '../../../core/services/service-tmdb.service';
import { Movie } from '../../../core/interfaces/movie';

@Component({
  selector: 'app-home-carrousel',
  templateUrl: './home-carrousel.component.html',
  styleUrl: './home-carrousel.component.css',
})
export class HomeCarrouselComponent {
  constructor(private MovieService: ServiceTmdbService) {
  }
  
  listPopularMovies: Movie[] = [];

  getTopRated() {
    this.MovieService.getNowPlaying().subscribe((data) => {
      this.listPopularMovies = data.results.slice(0, 3);
      console.log(data);
    });
  }
  ngOnInit(): void {
    this.getTopRated();
  }
}
