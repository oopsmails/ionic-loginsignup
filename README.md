# Apps

## Apple
## Film


## Build Android

ionic build --prod

ionic capacitor add android
- Error: Is Capacitor installed?

npm install @capacitor/core
npm install @capacitor/cli --save-dev

ionic capacitor add android

ionic capacitor copy android

cd android
./gradlew assembleDebug

- Error: > Could not read script '/home/albert/Documents/dev/ionic/ionic-loginsignup/film/android/capacitor.settings.gradle' as it does not exist

Fixed by: ionic capacitor sync android

- apk location
/home/albert/Documents/dev/ionic/ionic-loginsignup/film/android/app/build/outputs/apk/debug

## Build iOS

- xcode 
### cocoapods

- This is the simplest

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install cocoapods

- Through gem

1. First open your terminal

2. Then update your gem file with command

sudo gem install -n /usr/local/bin cocoapods
3. Then give your project path

cd /your project path
4. Touch the podifle

touch podfile
5. Open your podfile

open -e podfile
6. It will open a podfile like a text edit. Then set your target. For example if you want to set up Google maps then your podfile should be like

use_frameworks!
target 'yourProjectName' do
    pod 'GoogleMaps'
end
7. Then install the pod

pod install


## Debug ionic app in android studio

- Run the app in Android Studio
- Open the Chrome browser and navigate to the URL chrome://inspect/#devices. Your connected Android device should show up in the list of Remote Targets.
- Click "inspect" link under the device


## Debug ionic app in xcode


To Be Dev

## Other

### If Android Studio, Device Manager is not opening

Go to Project Structure, most likely, there is no SDK configured!

- if still cannot open Device Manager

I still have the same problem with the Bumblebee version, but for now you can use the "Search Everywhere"(you can access "Search Everywhere" by pressing double shift) and type in "Virtual Device Manager" then it will works. This is a temporary solution for now.

- Android Studio, android studio android app no module

First of all, use AS to open *android* folder, e.g, /home/albert/Documents/dev/ionic/ionic-loginsignup/apple/android
Second, make sure, file *build.gradle* is in root folder
If still not showing, then, File, Sync Project with Gradle Files ...
Now, the app should be able to be run on Emulator.


