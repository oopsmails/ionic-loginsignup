# Film

- Ref:

https://ionicacademy.com/ionic-routing-navigation/?utm_source=convertkit&utm_medium=email&utm_campaign=%5BIONIC-COURSE%5D+Day+2%3A+Routing%20-%201568936

## Start Project

```
npm install -g ionic

ionic info

ionic start film blank --type=angular

ionic g page pages/tabs
ionic g page pages/people
ionic g page pages/planets
ionic g page pages/films
ionic g page pages/filmDetails

```


## Using capacitor-email-composer, because we are working as a capacitor project. Not working 20220212

see https://www.npmjs.com/package/capacitor-email-composer

npm install capacitor-email-composer
npx cap sync

npm i cordova-plugin-email
npx cap sync

npm install @ionic-native/email-composerr
npx cap sync

npm start
```
Error: The target entry-point "@ionic-native/email-composer" has missing dependencies:
 - @ionic-native/core
```

- add following in package.json ... two extras, :)
"@ionic-native/core": "^5.36.0",
"@ionic-native/splash-screen": "^5.36.0",
"@ionic-native/status-bar": "^5.36.0",

- In browser, 
  
  common.js:284 Native: tried calling EmailComposer.open, but Cordova is not available. Make sure to include cordova.js or run in a device/simulator

This means, need test in Emulator.

```
hasAccount()
hasAccount() => Promise<{ hasAccount: boolean; }


```

npm install cordova-plugin-email-composer 
npm install @awesome-cordova-plugins/email-composer 
npm install @awesome-cordova-plugins/core 
ionic cap sync



## If Using Cordova Plugins with Ionic Native

```
ionic cordova plugin add cordova-plugin-email

-----------
albert@albert-mint20:~/Documents/dev/ionic/ionic-loginsignup/film$ ionic cordova plugin add cordova-plugin-email
[ERROR] Refusing to run ionic cordova plugin inside a Capacitor project.
        
        In Capacitor projects, Cordova plugins are just regular npm dependencies.
        
        - To add a plugin, use npm i cordova-plugin-email
        - To remove, use npm uninstall cordova-plugin-email
-----------

npm install @ionic-native/email-composer

app/app.module.ts

import { EmailComposer } from '@ionic-native/email-composer/ngx';

providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    EmailComposer
  ],

pages/film-details/film-details.page.html:

<ion-button expand="full" (click)="shareFilm()">Share by Email</ion-button>

pages/film-details/film-details.page.ts

constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private emailComposer: EmailComposer) { }


shareFilm() {
    let email = {
        to: 'saimon@devdactic.com',
        subject: 'I love this one: ' + this.film.title,
        body: 'Can you remember the opening?<br><br>\"' + this.film.opening_crawl + '\"',
        isHtml: true
    };

    this.emailComposer.open(email);
}


```




