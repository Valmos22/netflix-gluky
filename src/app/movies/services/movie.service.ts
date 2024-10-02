import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private firestore: AngularFirestore) {}

  getMovies(): Observable<Movie[]> {
    return this.firestore.collection<Movie>('movies').valueChanges();
  }

  getMoviesByCategory(category: string): Observable<Movie[]> {
    return this.firestore.collection('movies', ref => ref.where('categoria', '==', category))
    .snapshotChanges()
    .pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data}
      }))
    );
  }

  getMovieById(movieId: string): Observable<string> {
    return this.firestore.collection('movies').doc(movieId).snapshotChanges().pipe(
      map(action => {
        const data = action.payload.data() as any;
        const id = action.payload.id;
        return { id, ...data };
      })
    )
  }
}
