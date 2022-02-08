
cd ~/Documents/dev/ionic/ionic-loginsignup/apple
wait
ionic build --prod
wait
ionic capacitor add android
wait
ionic capacitor copy android
wait
cd android
wait
./gradlew assembleDebug
wait
cd ..
wait
pwd
