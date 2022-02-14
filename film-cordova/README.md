# Film Cordova


npm install -g cordova @ionic/cli
	
ionic start film-cordova blank --type=angular


## ionic lab: for dev

npm i @ionic/lab
ionic lab

```
> ionic-lab http://localhost:8100 --host localhost --port 8200 --project-type angular --app-name film-cordova --app-version 0.0.1

[INFO] Development server running!
       
       Lab: http://localhost:8200
       Local: http://localhost:8100
       
       Use Ctrl+C to quit this process

[INFO] Browser window opened to http://localhost:8200!

```

## Build for iOS

npm install -g ios-sim
npm install -g ios-deploy





- Temp

```

<ion-button expand="full" (click)="shareFilm()">Share by Email</ion-button>

import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

private emailComposer: EmailComposer

shareFilm() {
    let email = {
      to: 'oopsmails@gmail.com',
      subject: 'I love this one: ' + this.film.title ? this.film.title : ' mock title',
      body: 'Can you remember the opening?<br><br>\"' + this.film.opening_crawl + '\"',
      isHtml: true
    };

    console.log(email);
 
    // this.emailComposer.open(email);
  }



```

