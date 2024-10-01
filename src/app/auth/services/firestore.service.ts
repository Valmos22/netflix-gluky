import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) { }

  // Obtener catálogo de películas
  getMovies() {
    return this.firestore.collection('movies').valueChanges();
  }

  // Agregar datos del usuario
  addUserData(uid: string, data: any) {
    return this.firestore.collection('users').doc(uid).set(data);
  }
}
