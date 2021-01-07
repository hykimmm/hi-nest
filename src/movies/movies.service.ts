import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entitiy';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];
  
  getAll(): Movie[] {
    return this.movies;
  }

  getOne(movieId: string):Movie {
    const movie = this.movies.find(movie => movie.id === +movieId);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${movieId}`);
    }

    return movie;
  }

  deleteOne(movieId: string) {
    this.getOne(movieId);
    this.movies.filter(movie => movie.id !== +movieId);
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    })
  }
}