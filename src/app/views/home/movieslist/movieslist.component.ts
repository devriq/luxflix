import { Movie } from './../../../shared/services/model/movie.model';
import { MovieService } from '../../../shared/services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit {
  
  public list:Movie[] = [];

  constructor(
    public movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(){
    this.movieService.getMoviesList().subscribe((data)=>{
      data.results.map((item)=>{
        this.list.push(item);
      })
      console.log(this.list)
    })
  }

}
