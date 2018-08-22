# Firebase implementation

## Expo Version

In expo version of Arivaa Firebase, we have used web SDK since expo does not support firebase native SDKs for ios and android.

**Purpose of creating a expo version :**

Many a times, we don't need all the firebase features but only need it as a database and for authentication purposes.So we are solving that problem by supporting all the authentication types from firebase.

Expo does support Google and Facebook Authentication and we are using Expo's [facebook](https://docs.expo.io/versions/latest/sdk/facebook.html) and [google](https://docs.expo.io/versions/latest/sdk/google.html) authentication. But Expo does not support Phone, Github and Twitter Authentications by default which we feel might be integral for real word use cases. Arivaa firebase is intended to fully support integration with firebase as a database and support all types of authentication provided by firebase. So we have provided the missing Phone, Github and Twitter authentications. Read below how we managed to do the same.

_Note : Expo version does not aim at supporting native features like AdMob, Analytics etc. For that we will be rolling out a separate version which will be non-expo._

**Main Challenges and how we tackled it.**

Phone,Twitter and Github Authentication was not initially supported because of the below reasons :

1. Phone authentication over web requires Recaptcha authentication which is not supported over native platforms, So we had to support it via a [webview](https://facebook.github.io/react-native/docs/webview.html). 
2. Twitter and Github authentication was not supported since it requires  callback over web. So again webview comes to the solution.

We have tried to optimize the webview experience for above challenges by providing responsive recaptcha implementation and a elegant UI for handling loading state while webview is processing the request.

However supporting the above features requires you to host a simple static webpage\(which does not include any javascript or any risk\) over internet. This webpage will be used by the application to execute any javascript from application by injecting it dynamically using React native's [WebView](https://facebook.github.io/react-native/docs/webview.html) Component.

**Implementation Details of Webview Authentication and how to change webview UI**

All the logic for javascript execution is covered under js/components/CustomWebview component.

_index.html under this folder is the static html file which will have to be hosted over the web in order for the phone,github and twitter authentications to work._

## _**Important**_ ****_**Notes regarding Web View hosting**-_

* _By default, app uses the index.html file we have hosted under_ [https://arivaa.laxaar.com/webview.html](https://arivaa.laxaar.com/webview.html)_._
* _If index.html is to be changed, it has to be pushed online for the changes in this file to take effect and URL should be updated under WEBVIEW\_URL in js/config/environment.js._ 
* _During development, You can use the index.html included with the project by uncommenting the line-19 ternary condition in js/components/CustomWebview/view.js._ 
* _T**he hostname of the webview e.g localhost during development, Internal IPs or custom web url has to be allowed in firebase in authentication section as per the screenshot below** :_ 

![](../.gitbook/assets/image%20%285%29.png)

