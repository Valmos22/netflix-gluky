import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

/**
 * Servicio de peliculas que maneja las operaciones optencion de informacion sobre las peliculas,
 * obtener peliculas, obtener pelicula por id y obtener peliculas por categoria.
 */
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  /**
  * Crea una instancia del AuthService.
  * @param afAuth El servicio AngularFireAuth utilizado para manejar autenticación con Firebase.
  */
  constructor(private firestore: AngularFirestore) {}

    /**
 * Busca todas las peliculas actuales.
 * @returns Una promesa que se resuelve al enviar la peticion.
 */
  getMovies(): Observable<Movie[]> {
    return this.firestore.collection<Movie>('movies').valueChanges();
  }

  /**
   * Busca las peliculas actuales por categoria.
   * @param category El correo electrónico del nuevo usuario.
   * @returns Una promesa que se resuelve la consulta a la coleccion.
   */
  getMoviesByCategory(category: string): Observable<Movie[]> {
    return this.firestore.collection('movies', ref => ref.where('categoria', '==', category))
    .snapshotChanges()
    .pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any; //No se recomienda usar any
        const id = a.payload.doc.id;
        return { id, ...data}
      }))
    );
  }

  /**
   * Busca las peliculas actuales por categoria.
   * @param movieId El correo electrónico del nuevo usuario.
   * @returns Una promesa que se resuelve la consulta a la coleccion.
   */
  getMovieById(movieId: string): Observable<string> {
    return this.firestore.collection('movies').doc(movieId).snapshotChanges().pipe(
      map(action => {
        const data = action.payload.data() as any; //No se recomienda usar any
        const id = action.payload.id;
        return { id, ...data };
      })
    )
  }
}
