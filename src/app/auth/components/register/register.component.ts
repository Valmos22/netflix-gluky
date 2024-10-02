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

  email: string = "";
  password: string = "";

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.email, this.password)
      .then(result => {
        console.log('User registered successfully', result);
      })
      .catch(error => {
        console.error('Error registering user', error);
      });
  }

  returnLogin(){
    this.router.navigate(['/login']);
  }

}
