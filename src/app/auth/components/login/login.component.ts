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
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onLogin() {
    try {
      await this.authService.login(this.email, this.password);
      this.router.navigate(['/movies']);
    } catch (error) {
      console.error(error);
    }
  }

  async onGoogleSignIn() {
    try {
      await this.authService.googleSignIn();
      this.router.navigate(['/movies']);
    } catch (error) {
      console.error(error);
    }
  }
}
