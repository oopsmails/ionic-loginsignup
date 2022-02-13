# ionic-loginsignup Part 1: Setup and Routing 

https://www.9lessons.info/2019/08/ionic-5-angular-8-welcome-page.html


## Quick Run

- server.js, if in environment, set mock = false

"start": "ng serve & node ./server/server.js",

there is a server.js, which is as mock backend ...


- in environment, set mock = true, in order to test on REAL Physical Phone!

Further, in order to build --prod and test on phone, default set mock as true.


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



```

ionic build --prod

ionic capacitor add android
npx cap sync

npx cap copy
npx cap open android

albert@albert-mint20:~/Documents/dev/ionic/ionic-loginsignup/apple$ npx cap open android
[error] Unable to launch Android Studio. Is it installed?
        Attempted to open Android Studio at: /usr/local/android-studio/bin/studio.sh
        You can configure this with the CAPACITOR_ANDROID_STUDIO_PATH environment variable.

- This is a permission issue, but couldn't figure it out, :(

export CAPACITOR_ANDROID_STUDIO_PATH=/home/albert/Documents/programs/android-studio

sudo chmod -R 777 /Applications/Android\ Studio\ 3.0\ Preview.app/Contents/gradle
chmod 755 platforms/android/gradlew

```
- Fixed by NOT opening Android Studio!!!! <----------------------------- the apk can be installed and run on phsical phone now.


```
ionic capacitor add android 

ionic capacitor copy android && cd android && ./gradlew assembleDebug && cd ..

Then your apk will be at:

android/app/build/outputs/apk/debug/app-debug.apk
If you want to run on device directly from command line:

```

## Deparated Below!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


### Build iOS App
Following commands for executing Xcode build, watch the video tutorial you will understand more.
```
ionic capacitor add ios
ionic capacitor open ios
```

```
- On macOS

npm install -g ionic

ionic build --prod

albert@Alberts-iMac apple % ionic capacitor add ios
> capacitor add ios
[error] Could not find the ios platform.
        You must install it in your project first, e.g. w/ npm install @capacitor/ios

npm install @capacitor/ios

[error] CocoaPods is not installed.

sudo gem uninstall cocoapods && sudo gem install cocoapods

ionic capacitor open ios

- error: springboard quit unexpectedly

cd "C:\Program Files\Oracle\VirtualBox\"
VBoxManage setextradata "MacOS" VBoxInternal/CPUM/IsaExts/AVX 0
VBoxManage setextradata "MacOS" VBoxInternal/CPUM/IsaExts/AVX2 0


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

