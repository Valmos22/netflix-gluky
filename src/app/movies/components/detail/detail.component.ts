import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  movie!: any; //No se recomienda usar any

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ){}

  /**
   * Maneja el evento de busqueda de peliculas por id utilizando el servicio MovieService.
   */
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieById(id!).subscribe(movie => {
      this.movie = movie;
    });
  }
}
