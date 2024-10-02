import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {

  /**
   * Dirección de correo electrónico ingresada por el usuario.
   */
  email: string = "";
  successMessage: string = '';
  errorMessage: string = '';

  constructor( private authService: AuthService, private router: Router){}

  /**
   * Maneja el evento de recuperar contraseña utilizando el servicio AuthService.
   * Muestra un mensaje el envio del email es exitoso.
   */
  resetPassword(){
    this.authService.resetPassword(this.email)
    .then(result => {
      this.successMessage = 'Correo de recuperación enviado.', result;
    })
    .catch(error => {
      this.errorMessage = error.message;
      this.successMessage = '';
    });
  }

  /**
   * Redirige a la pagina del login.
   */
  returnLogin(){
    this.router.navigate(['/login']);
  }

}
