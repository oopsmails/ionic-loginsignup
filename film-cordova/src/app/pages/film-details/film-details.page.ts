import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

  film: any;

  constructor(private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private emailComposer: EmailComposer
  ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('id=' + id);
    this.apiService.getFilm(id).subscribe(res => {
      this.film = res;
    });
  }

  shareFilm() {

    this.emailComposer.hasClient().then((available: boolean) => {
      if (available) {
        let email = {
          to: 'oopsmails@gmail.com',
          subject: 'I love this one: ' + this.film.title ? this.film.title : ' mock title',
          body: 'Can you remember the opening?<br><br>\"' + this.film.opening_crawl + '\"',
          isHtml: true
        };

        console.log(email);
        this.emailComposer.open(email);
        console.log('After this.emailComposer.open ......');
      } else {
        console.log('email native client is NOT available!!!');
        alert('email native client is NOT available!!!');
      }
    });

  }
}