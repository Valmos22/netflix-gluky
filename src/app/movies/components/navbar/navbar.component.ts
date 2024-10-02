import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private authService: AuthService,  private router: Router){}

  logout(){
    this.authService.logout()
    .then(result => {
      console.log('User logout successfully', result);
    })
    .catch(error => {
      console.error('Error logout user', error);
    });
  }

  returnMovies(){
    this.router.navigate(['/movies']);
  }
}
