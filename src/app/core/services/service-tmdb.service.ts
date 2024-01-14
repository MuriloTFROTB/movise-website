import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class ServiceTmdbService {
  constructor(private Http: HttpClient) {}
  private baseUrl = 'https://api.themoviedb.org/3/';
  private apiKey = '?api_key=ea848ef9264e99b6eb4d27a14101a935';

  

  getPopularMovies(): Observable<any> {
    return this.Http.get<any>(`${this.baseUrl}trending/all/week${this.apiKey}`);
  }
  getNowPlaying(): Observable<any> {
    return this.Http.get<any>(`${this.baseUrl}movie/now_playing${this.apiKey}`);
  }
  getTopRted(): Observable<any> {
    return this.Http.get<any>(`${this.baseUrl}/movie/top_rated${this.apiKey}`);
  }
}
