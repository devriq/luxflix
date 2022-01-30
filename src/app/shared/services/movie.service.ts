import { ResponsePageable } from './model/responsePageable.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiUrl = 'https://api.themoviedb.org/4/list/8175818?page=1&api_key=a79b231633cd9524b54133ecc5c8f1a5&language=pt-BR&sort_by=release_date.asc'

  constructor(
    private httpClient: HttpClient 
  ) {  }

    public getMoviesList():Observable<ResponsePageable> {
      return this.httpClient.get<ResponsePageable>(this.apiUrl)
    }

}
