import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

/**
 * Servicio de autenticación que maneja las operaciones de registro,
 * inicio de sesión, recuperación de contraseña y cierre de sesión.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
  * Crea una instancia del AuthService.
  * @param afAuth El servicio AngularFireAuth utilizado para manejar autenticación con Firebase.
  * @param router Servicio de navegación entre rutas de Angular.
  */
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  /**
 * Registra un nuevo usuario utilizando correo electrónico y contraseña.
 * @param email El correo electrónico del nuevo usuario.
 * @param password La contraseña del nuevo usuario.
 * @returns Una promesa que se resuelve cuando el registro ha sido exitoso.
 */
  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
 * Inicia sesión de un usuario utilizando su correo electrónico y contraseña.
 * @param email El correo electrónico del usuario.
 * @param password La contraseña del usuario.
 * @returns Una promesa que se resuelve cuando el inicio de sesión ha sido exitoso.
 */
  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // Inicio de sesión con Google
  async googleSignIn() {
    try {
      const result = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
 * Recupera la contraseña de un usuario utilizando su correo electrónico.
 * @param email El correo electrónico del usuario.
 * Envia un email con un enlace al correo que proporciono el usuario
 */
  async resetPassword(email: string) {
    try {
      await this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Metodo que se utiliza para cerrar sesion.
   */
  async logout() {
    await this.afAuth.signOut();
    this.router.navigate(['/login']);
  }

  /**
   * Metodo que se utiliza para Obtener estado de autenticación.
   */
  getAuthState() {
    return this.afAuth.authState;
  }
}
