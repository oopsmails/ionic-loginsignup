# ionic-loginsignup Part 1: Setup and Routing 

https://www.9lessons.info/2019/08/ionic-5-angular-8-welcome-page.html

## Setup project

 - `npm install -g ionic`

Mac OS, if with permission problem of folder "/usr/local/lib", then use `sudo npm install -g ionic`

- `ionic start apple tabs`, apple is the project name.

Select "Angular" as framework, will try "React" later

- run `ionic generate page home`,

Problem: error "Could not find module "@ionic/angular-toolkit""

Solution: 

```
npm install -g @angular/cli
npm install
ionic generate page home
ionic generate page index
```

### generate

- generate everything inside /apple folder

`cd apple`

- Generate Unauthenticated Pages

```
ionic generate page pages/welcome
ionic generate page pages/login
ionic generate page pages/signup

```

- Generate Authenticated Pages
```
ionic generate page pages/feed
ionic generate page pages/messages
ionic generate page pages/notifications
ionic generate page pages/settings

```

ionic generate component components/slides

ionic generate component components/start-button

# ionic-loginsignup Part 2: Login, Auth and Signup

https://www.9lessons.info/2019/09/ionic-5-and-angular-8-restful-api-user.html

ionic generate service services/http

ionic generate service services/storage

ionic generate service services/auth

- Error: Cannot find module '@capacitor/core'

npm install --save @capacitor/core @capacitor/cli


# Building a Mobile Application
You have to create a production build for generating mobile applications.

### Production Build
$ ionic build --prod

### Build iOS App
Following commands for executing Xcode build, watch the video tutorial you will understand more.
$ ionic capacitor add ios
$ ionic capacitor open ios

### Build Android App
Open Android build using Android SDK
$ ionic capacitor add android
$ ionic capacitor open andriod


### Project Updates
If you want to update your project changes.
$ ionic capacitor copy ios
$ ionic capacitor copy ios

