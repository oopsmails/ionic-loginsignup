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

## Android

ionic cordova platform add android

```
albert@albert-mint20:~/Documents/dev/ionic/ionic-loginsignup/film-cordova$ ionic cordova platform add android
[ERROR] Refusing to use Cordova inside a Capacitor project.
        
        Are you looking for the ionic capacitor commands? See ionic capacitor --help
        
        If you are switching from Capacitor to Cordova, run: ionic integrations disable capacitor

```
ionic integrations disable capacitor

ionic cordova platform add android

ionic cordova build android


```
FAILURE: Build failed with an exception.

* Where:
Script '/home/albert/Documents/dev/ionic/ionic-loginsignup/film-cordova/platforms/android/CordovaLib/cordova.gradle' line: 75

* What went wrong:
A problem occurred evaluating script.
> No usable Android build tools found. Highest 30.x installed version is 30.0.2; minimum version required is 30.0.3.
```

export ANDROID_HOME=$HOME/Android/Sdk
export ANDROID_SDK_ROOT=$ANDROID_HOME/build-tools/32.0.0

source ~/.bashrc

```
> cordova build android
Checking Java JDK and Android SDK versions
ANDROID_SDK_ROOT=/home/albert/Android/Sdk/build-tools/32.0.0 (recommended setting)
ANDROID_HOME=/home/albert/Android/Sdk (DEPRECATED)
Using Android SDK: /home/albert/Android/Sdk/build-tools/32.0.0
Subproject Path: CordovaLib
Subproject Path: app

FAILURE: Build failed with an exception.

* Where:
Script '/home/albert/Documents/dev/ionic/ionic-loginsignup/film-cordova/platforms/android/CordovaLib/cordova.gradle' line: 69

* What went wrong:
A problem occurred evaluating script.
> No installed build tools found. Install the Android build tools version 30.0.3 or higher.
```

Go to Android Studio, Tool, SDK Manager, SDK Tools Tab, check "Show Package Details", install 30.0.3 and 31.0.0 ...

Finally, have to use Android Studio .... 20220214

### Email


ionic cordova plugin add cordova-plugin-email
npm install @ionic-native/email-composer


npm i @ionic-native/core
npm i @ionic-native/splash-screen
npm i @ionic-native/status-bar


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

