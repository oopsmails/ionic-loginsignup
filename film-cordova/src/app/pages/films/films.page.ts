import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  films: Observable<any>;

  constructor(private navController: NavController, 
    private router: Router,
    private apiService: ApiService
    ) { }

  ngOnInit() {
    this.films = this.apiService.getFilms();
  }

  openDetails(film) {
    // Both of these would work!
    // But the standard Router is recommended.
    // this.navController.navigateForward(`/tabs/films/3`); // v1
    // this.router.navigateByUrl(`/tabs/films/3`); // v2
    let split = film.url.split('/');
    let filmId = split[split.length-2];
    this.openDetailsById(filmId);
  }
  
  openDetailsById(filmId) {
    console.log('filmId=' + filmId);
    this.router.navigateByUrl('/tabs/films/' + filmId);
  }

  goToPlanets() {
    this.navController.navigateRoot(`/tabs/planets`)
  }

}