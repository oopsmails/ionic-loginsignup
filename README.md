# ionic-loginsignup, 

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
