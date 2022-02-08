import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { JsonService } from './json.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private jsonService: JsonService
  ) { }

  post(serviceName: string, data: any) {
    console.log('environment.mock=' + environment.mock);
    if (environment.mock) {
      return this.jsonService.getData('assets/mock/userData.json');
    }

    const headers = new HttpHeaders();
    const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrl + serviceName;

    const res = this.http.post(url, JSON.stringify(data), options);
    console.log(res);
    return res;
  }
}