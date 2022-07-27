# [Genshin-App](https://genshin-app.netlify.app/)

Genshin-App is a fanmade website for Genshin Impact game.
It contains database where you have easy and quick access to the most useful information like current and past events or banners, see what's available in domains, quickly calculate materials needed for leveling up characters or even build your own teams.

## Usage
1. Install dependencies
```
npm install
```

2. Set up your own firestore firebase at
https://console.firebase.google.com/u/0/

3. Create .env file in your project root directory with the following code:

```
REACT_APP_apiKey=xxx
REACT_APP_authDomain=xxx
REACT_APP_projectId=xxx
REACT_APP_storageBucket=gxxx
REACT_APP_messagingSenderId=xxx
REACT_APP_appId=xxx
REACT_APP_measurementId=xxx
```
and replace 'xxx' with your own firestore fireabse config.
