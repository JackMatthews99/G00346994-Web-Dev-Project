import { Component } from '@angular/core';
import { MovieProvider } from '../../providers/movie-gambler/movie-gambler';

@Component({
  selector:'page-movies',
  templateUrl:'movies.html'
})

export class MoviesPage {
movies: any[]=[];
constructor(private mp:MovieProvider) {
}
ionViewDidLoad(){
this.mp.getMovies().subscribe(data =>
{
this.movies = data.Search;
});
}
}
