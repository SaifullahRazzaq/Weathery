# Weathery

A weather app built using React Native CLI for android on Ubuntu.  
Uses the [openweathermap](https://openweathermap.org/) api for fetching weather data.  
Design inspired from [here](https://www.behance.net/gallery/138332467/Weather-App?tracking_source=search_projects%7Cweather+app).

# Table of Contents

- [Download APK](#download)
- [App functions](#app-functions)
- [Used API Endpoints](#used-api-endpoints)
- [Editor Setup](#editor-setup)
- [Development Setup](#development-setup)
- [App Screenshots](#app-screenshots)

# Download

Try out the app on [Android](https://drive.google.com/drive/folders/1-l6atoPG8XsMvlC0jvdQESU3o6iR03by?usp=sharing). Latest version is the one with highest number.

# App Functions

A user is able to:

- Navigate between two screens _(home and details)_.
- Search for a city's weather data by city name.
- View hourly and daily weather data of searched city.
- View weather data of current city accessed via device location.

# Used API Endpoints

- [Search by lat lon and get city name](https://api.openweathermap.org/data/2.5/weather?lat=27.7172&lon=85.3240&units=metric&appid=id)
- [Search by city name](https://api.openweathermap.org/data/2.5/forecast?q=kathmandu&units=metric&appid=id)
- [Search by lat lon](https://api.openweathermap.org/data/2.5/onecall?lat=27.7172&lon=85.3240&appid=id)

# Editor Setup

```
- Prettier
- Code Spell Checker
- ESLint
- commitlint
```

# Development Setup

### Prerequisites

```
- Node.js and NPM
- Android SDK
- JDK v18 (or above)
- Gradle v7.5.1
- Visual Studio Code
- React Native Debugger
```

Run following commands from project root directory to get up and running with development.

### 1. Install dependencies

`npm install`

### 2. Start metro bundler

`npx react-native start` || `npm start`

### 3. Build the app on android

`npx react-native run-android` || `npm run android`

# App Screenshots

<img src="src/assets/screenshots/6.jpg" width="230" height="500" />
<img src="src/assets/screenshots/1.jpg" width="230" height="500" />
<img src="src/assets/screenshots/5.jpg" width="230" height="500" />
<img src="src/assets/screenshots/2.jpg" width="230" height="500" />
<img src="src/assets/screenshots/3.jpg" width="230" height="500" />
<img src="src/assets/screenshots/4.jpg" width="230" height="500" />
<img src="src/assets/screenshots/7.jpg" width="230" height="500" />
