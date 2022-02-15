
# Build for Android
I guess the majority of you is more interested in Android (also due to the absence of a Mac).

For Android, it’s a good idea to download the official environment Android Studio. This will help you to install the Android SDK which is needed now.

After installing Android Studio open it and inside the Wizard click Configure and pick SDK Manager.

This will bring you to a view where you can install an Android SDK – simply pick the newest one and install what you need!

ionic-crash-course-android-sdk

Now we can add the Android platform to our project just like we did before for iOS, so go to your command line and run:

```
ionic cordova platform add android
ionic cordova build android
```

This results in a new Android project inside the platforms folder. You can now either go ahead and import this project into Android Studio or directly install it to your Android device if it’s connected with USB.

Ionic already told us the path to the generated APK after the build command.

If you have followed the course so far, this should be:

```
/platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

You can now use the Android Debug Bridge (ADB) to install it by running:

```
adb install platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

This will install the App on your device and you got your first Ionic app in your hands!

## Real build

ionic cordova platform add android

- Error: Source path does not exist: resources/android/icon/drawable-hdpi-icon.png

npm i -g cordova-res

ionic cordova resources android

ionic cordova platform add android

- Error: Source path does not exist: resources/android/xml/network_security_config.xml

```
Examine the resources folder if the xml folder exists in /android, if it doesn't just create it like..

resources/
    android/
        xml/
           network_security_config.xml
Enter the following inside the file

<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
<domain-config cleartextTrafficPermitted="true">
    <domain includeSubdomains="true">localhost</domain>
</domain-config>
</network-security-config>
```

delete platforms/android

and re-run 

ionic cordova platform add android

ionic cordova build android --verbose

- Error:

```
* What went wrong:
A problem occurred evaluating script.
> No installed build tools found. Install the Android build tools version 30.0.3 or higher.
```


Go to Android Studio, Tool, SDK Manager, SDK Tools Tab, check "Show Package Details", install 30.0.3 and 31.0.0 ...

Finally, have to use Android Studio .... 20220214

- Error: alert('email native client is NOT available!!!');

20220214: stopped here on Android Emulator, maybe try on real device later. But, at least, native API method call is OK, e.g, 

```
this.emailComposer.hasClient().then((available: boolean) => {
```

