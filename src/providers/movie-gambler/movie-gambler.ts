import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/*
Generated class for the MovieProvider provider.
*/
@Injectable()
export class MovieProvider {
constructor(public http: Http) {
console.log('Hello MovieProvider Provider');
}
getMovies(): Observable<any>{
  /*Get info about movies from this url */
return this.http.get("http://www.omdbapi.com/?apikey=121c2657&s=gambler").map(res => res.json());
}
}