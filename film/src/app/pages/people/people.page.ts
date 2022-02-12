import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  peoples: Observable<any>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.peoples = this.apiService.getPeoples();
  }

  openDetails(people) {
    alert('need details page!');
  }
}
