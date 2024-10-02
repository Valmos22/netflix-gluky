import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {

  categories = ['terror', 'drama', 'accion'];
  movies: { [key: string]: any[] } = {};

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.categories.forEach(category => {
      this.movieService.getMoviesByCategory(category).subscribe(movies => {
        this.movies[category] = movies;
      });
    });
  }

  scrollLeft(category: string) {
    const container = document.querySelector(`[data-category="${category}"]`);
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  }

  scrollRight(category: string) {
    const container = document.querySelector(`[data-category="${category}"]`);
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  }

  navigateToDetail(movieId: string ) {
    this.router.navigate(['/detail', movieId]);
  }
}
