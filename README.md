# ionic-loginsignup Part 1: Setup and Routing 

https://www.9lessons.info/2019/08/ionic-5-angular-8-welcome-page.html

## Setup and Develop the Project

### Part1: Startup and Configure

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

### ionic-loginsignup Part 2: Login, Auth and Signup

https://www.9lessons.info/2019/09/ionic-5-and-angular-8-restful-api-user.html

ionic generate service services/http

ionic generate service services/storage

ionic generate service services/auth

ionic generate service services/toast

ionic generate guard guards/home

ionic generate guard guards/index


### Problems:

#### Error: Cannot find module '@capacitor/core'

npm install --save @capacitor/core @capacitor/cli


#### Error: Storage set not defined ...

```
in storage.service.ts, following is not supported anymore.

import { Plugins } from '@capacitor/core';

use following to import new

npm install --save @capacitor/storage

import { Storage } from '@capacitor/storage';

```

#### Warn: escape and unescape deparated

- use following encodeURIComponent and decodeURIComponent

```
const encryptedValue = btoa(encodeURIComponent(JSON.stringify(value)));

return JSON.parse(decodeURIComponent(atob(ret.value)));

```

- interesting explaination, but still use 

https://stackoverflow.com/questions/30631927/converting-to-base64-in-javascript-without-deprecated-escape-call





# Building a Mobile Application
You have to create a production build for generating mobile applications.

### Production Build
ionic build --prod


#### Error: css-loader error: Invalid version: "15.2-15.3"

- https://github.com/angular/angular-cli/issues/22606

```
npx browserslist

error from following: 
safari 15.2-15.3

```

- change *.browserslistrc* file at root level, final like following,

```
last 1 Chrome version
last 1 Firefox version
last 2 Edge major versions
last 2 Safari major versions
last 2 iOS major versions
Firefox ESR
not IE 11 # Angular supports IE 11 only as an opt-in. To opt-in, remove the 'not' prefix on this line.
not dead
# not IE 9-11
# not ios_saf 15.2-15.3
not safari 15.2-15.3

```


### Build iOS App
Following commands for executing Xcode build, watch the video tutorial you will understand more.
```
ionic capacitor add ios
ionic capacitor open ios
```

### Build Android App
Open Android build using Android SDK
```
ionic capacitor add android
ionic capacitor open andriod
```

### Project Updates
If you want to update your project changes.
```
ionic capacitor copy ios
ionic capacitor copy android
```
