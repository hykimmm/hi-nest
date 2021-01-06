import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entitiy';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];
  
  getAll(): Movie[] {
    return this.movies;
  }

  getOne(movieId: string):Movie {
    return this.movies.find(movie => movie.id === +movieId);
  }

  deleteOne(movieId: string): boolean {
    this.movies.filter(movie => movie.id !== +movieId);
    return true;
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    })
  }
}