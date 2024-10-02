import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  /**
   * Dirección de correo electrónico ingresada por el usuario.
   */
  email: string = '';

  /**
   * Contraseña ingresada por el usuario.
   */
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  /**
   * Maneja el evento de inicio de sesión utilizando el servicio AuthService.
   * Redirige al usuario a la página de películas si el inicio de sesión es exitoso.
   */
  async onLogin() {
    try {
      await this.authService.login(this.email, this.password);
      this.router.navigate(['/movies']);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Maneja el inicio de sesión con Google.
   * Si el inicio de sesión es exitoso, redirige al usuario a la página de películas.
   */
  async onGoogleSignIn() {
    try {
      await this.authService.googleSignIn();
      this.router.navigate(['/movies']);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Redirige a la pagina para recuperar contraseña.
   */
  navigateToResetPassword() {
    this.router.navigate(['/resetPassword']);
  }

  /**
   * Redirige a la pagina para registrar un usuario.
   */
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
