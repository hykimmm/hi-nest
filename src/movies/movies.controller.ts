import { Controller, Delete, Get, Param, Post, Patch, Body, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entitiy';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

  constructor(readonly moviesServies: MoviesService) {}

  @Get() 
  getAll(): Movie[]{
    return this.moviesServies.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after ${searchingYear}`
  } 

  @Get("/:id")
  getOne(@Param("id") movieId: string): Movie {
    return this.moviesServies.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesServies.create(movieData);
  }

  @Delete("/:id")
  remove(@Param("id") movieId: string) {
    return this.moviesServies.deleteOne(movieId);
  }

  @Patch("/:id")
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updateMovie: movieId,
      ...updateData,
    }
  }



}
