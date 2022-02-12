import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get('https://swapi.dev/api/films');
  }

  getFilm(id) {
    return this.http.get(`https://swapi.dev/api/films/${id}`);
  }
}
