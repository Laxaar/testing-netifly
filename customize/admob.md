# Admob

There are 3 types of Admob Ads :

1. Banner Ads - In place banners
2. Interstitial Ads - Opened in a modal and on top of App, mostly a image.
3. Rewarded Ads - Opened in a modal and on top of App, mostly a video and links to various apps.

Note - For Admob to work, Please keep in mind that the app should meet the below requirements : 

1. You should have the application created on google play  and a admob account.
2. Google configuration should be updated in app.json. \(Sample working configuration is already present in app.json\)
3. You need to create ad units in admob console.
4. Configure the unitIds in src/config/admob.js.\(Optional - if you create your own implementation\)

**For Sample Implementation, Check the container admob under src/js/containers/admob.** 

![Banner Ad is on top](../.gitbook/assets/screen-shot-2018-04-22-at-7.18.21-pm.png)

![](../.gitbook/assets/screen-shot-2018-04-22-at-7.18.44-pm.png)



![](../.gitbook/assets/screen-shot-2018-04-22-at-7.18.34-pm.png)

**Detailed Reference Docs :**

{% embed data="{\"url\":\"https://docs.expo.io/versions/v26.0.0/sdk/admob\",\"type\":\"link\",\"title\":\"Admob - Expo Documentation\",\"icon\":{\"type\":\"icon\",\"url\":\"https://docs.expo.io/static/images/favicon.ico\",\"width\":32,\"height\":32,\"aspectRatio\":1}}" %}





