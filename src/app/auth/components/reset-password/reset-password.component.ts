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

  email: string = "";
  successMessage: string = '';
  errorMessage: string = '';

  constructor( private authService: AuthService, private router: Router){}


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

  returnLogin(){
    this.router.navigate(['/login']);
  }

}
