---
title: Setting up the project
---
## Project Contents

1. Bundle.zip - This file contains all the code for Arivaa Firebase
2. Documentation.rtf \(Contains the links to the website for Arivaa Firebase and its documentation\)

## System Requirements

1. Node.js version &gt;=6.0 and &lt;=8.5.x should be installed. Download [here](https://nodejs.org/en/download/) \(**Note -  Please don't use Node 10.x.x since it is not compatible with most of expo and react native yet.**\)
2. NPM Version &gt;=3.0 should be installed. 
3. React Native CLI.  Install using `npm install -g react-native-cli`. For help, please check this [link](https://facebook.github.io/react-native/docs/getting-started.html).
4. Expo should be installed. Follow the instructions at this [link](https://expo.io/learn).
5. If you want to see the app running on your system, then your system should be connected to  a simulator which should be installed.
   1. If you are on a Mac machine, then you can simply install X-code and I-phone, where the simulators are automatically installed. Follow the guide on this [link](https://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/).
   2. If you are on a Windows machine, you will be able to test it properly on a Android Simulator which can be installed using [Genymotion](https://www.genymotion.com/) or [Android Studio](https://developer.android.com/studio/index.html).

## Setting up

1. Extract the bundle.zip folder. \(**Note -&gt; If you copy the files from extracted folder, Do remember to copy the hidden files like .babelrc etc. Else you might face issues while starting the project.**\)
2. In the extracted directory, Run npm install.
3. There are 2 ways to open this project on a simulator. 
   1. Via Expo Client
      1. Open the expo client on your system.
      2. Click on "Open Existing project" and browse to the project directory.
      3. Wait for a few minutes until you see the "Device" button enabled on the top right.
      4. Click on Device, Select the device and run the app.
   2. Via command line
      1. Start/Connect the device on which you want to test the app.
      2. Go to project directory and run the command `exp start`
4. You can also run the development code on your mobile.
   1. In the expo client on your system, click on publish project. Remember, in order to reflect the requisite changes, it is necessary to publish the project.
   2. Install the expo app using App store/Play Store and open it.
   3. Click on Scan QR Code and scan the code showing on the Expo Client or in the terminal.\(If you ran the project via command line\)
   4. The app should open on your mobile.
5. **Hosting the webview file over the web\(Only required for Phone, Github and Twitter Authentication\)** : Under components/CustomWebview, there is a index.html which will have to be hosted over any online hosting that you might have. This is neccesary to support Github,Twitter and Phone Authentication. To read why, Check this [section](/architecture/firebase-implementation). This is a one time process normally, But if you change the index.html, then make sure to push the changes online. Make sure to update the webview url under js/config/environment.js.
6. **Firebase setup :**  1. Setup the the project in firebase by following instructions at this [link](https://firebase.google.com/docs/).
   1. Go to the project in firebase console under the _Authentication_ section on left sidebar and enable all sign in methods in _Sign In Method Tab._
   2. **Add the website url you used in step-4 in authorized domains at the bottom under** _**Sign In Method Tab**_**.** [**Details**](/architecture/firebase-implementation#important-notes-regarding-web-view-hosting)
7. Configure Social Authentication for Google and Facebook by following the instructions in this [section](/customize/social-authentication).

If you still face any issues in setting up the projects, contact us, and we will get back to you as soon as possible. .
