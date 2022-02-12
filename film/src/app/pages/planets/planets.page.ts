import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

  planets: Observable<any>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.planets = this.apiService.getPlanets();
  }

  openDetails(planet) {
    alert('need details page!');
  }

}
