import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private firestore: AngularFirestore) {}

  getMovies(): Observable<Movie[]> {
    return this.firestore.collection<Movie>('movies').valueChanges();
  }
}
