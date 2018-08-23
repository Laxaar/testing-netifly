# Firebase Features Support

Arivaa Basic firebase aims at integrating Arivaa Basic version with firebase. It will have 2 versions

1. Expo Version which will use firebase web SDK integrated and we have tried to include every firebase feature that can be supported with Expo
2. Non Expo Version which will use [RN Firebase](https://rnfirebase.io/)  to provide advanced features not supported in Expo version and firebase Web SDK  like AdMob,App Indexing,Analytics etc. Below is the comparison in detail : 

|  | Non Expo Version | Expo Version |
| :--- | :--- | :--- |
| **AdMob** | ✅ | ✅ |
| **Analytics** | ✅ | ✅\(Via [Segment](https://segment.com)\) |
| **App Indexing** | ❌ | ❌ |
| **Authentication** | ✅ | ✅ |
| **Phone Number Authentication** | ✅ | ✅ |
| **Core** | ✅ | ✅ |
| _-- Multiple Apps_ | ✅ | ✅ |
| **Crashlytics** | ✅ | ❌ |
| **Crash Reporting** | ✅ | ❌ |
| **Dynamic Links** | ✅ | ❌ |
| **Performance Monitoring** | ✅ | ❌ |
| **Realtime Database** | ✅ | ✅ |
| _-- Offline Persistence_ | ✅ | ✅ |
| _-- Transactions_ | ✅ | ✅ |
| **Remote Config** | ✅ | ❌ |
| **Storage** | ✅ | ✅ |

**Check out implementation of firebase in detail** [**here**](../architecture/firebase-implementation)

