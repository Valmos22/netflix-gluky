import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  /**
   * Dirección de correo electrónico ingresada por el usuario.
   */
  email: string = "";

  /**
   * Contraseña ingresada por el usuario.
   */
  password: string = "";

  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Maneja el evento de registro de usuario utilizando el servicio AuthService.
   * Muestra un mensaje por consola si el registro es exitoso.
   */
  register() {
    this.authService.register(this.email, this.password)
      .then(result => {
        console.log('User registered successfully', result);
      })
      .catch(error => {
        console.error('Error registering user', error);
      });
  }

  /**
   * Redirige a la pagina del login.
   */
  returnLogin(){
    this.router.navigate(['/login']);
  }

}
