# Template to start hot module reload with React
Based on the awesome [presentation](http://phonegap.com/blog/2016/04/04/pgdayus2016-phonegap-reactjs/) and [project](https://github.com/JedWatson/picture-tour-app/tree/master) by Jed Watson

## Requirements
1. npm version 3.9.5 or later
2. ios-deploy (install: ```npm install -g ios-deploy```)

## Steps
### 1. Clone
Clone this project
```
git clone https://github.com/themadrussian/cordova-react-hmr-template.git
```
### 2. Edit details
Edit file ```package.json``` and change all URLs, e.g., repository, bugs, etc.
You probably don't want to point your project back to my repository :)

### 3. Initialize npm (optional)
The command will ask for your name, and which license you prefer. But you could set all that up manually from the previous step.
```
npm init
```
### 4. Install dependencies
```
npm install
```
### 5. Cordova/PhoneGap details
edit ```config.xml```
Change <name>, <description>, and <author> tags

**IMPORTANT** FOR IOS Development!!!
Change <widget id="io.cordova.hellocordova" ... >

The id must match your valid signing identity.
See [this](http://stackoverflow.com/questions/24381216/no-provisioning-profiles-with-a-valid-signing-identity-i-e-certificate-and-pri) answer on details.

## Icons, Splashscreens and such
I recommend using ionic for that. Easy instructions here: http://blog.ionic.io/automating-icons-and-splash-screens/
There is an icon.png file in the root folder, replace that with your own icon file.

# Start Development

```
npm start
```
## Where files are
- ```www/index.html``` Is the entry point. But it carries no weight, other than the <head><title>TITLE</title></head>
- ```src/index.js``` Is the main React script, replacing <div is="App"></div> inside ```www/index.html```
- ```src/components/Board.js``` place for add-on components, if any

## Open browser here
You can then open the app in your browser by visiting [localhost:8080](http://localhost:8080)

## Edit files
Edit file, and just save them. The browser will auto reload with new changes (hot reload)
without losing state of the components. Go webpack + NPM!

## Compiling for a platform (doesn't work with hot load)

Open it in the iOS Simulator by running (in another terminal):

```
cordova platform add ios
```

To avoid installing on your phone, disconnect the phone from your Mac :)
This will start a 6s Simulator.

```
npm run ios
```

Or in the Android emulator with:

```
cordova platform add android
```

```
npm run android
```

(both of which are just calling `cordova run ios` and `cordova run android`)

In this mode, the app will live-reload changes to React components using [react-hot-loader](https://github.com/gaearon/react-hot-loader) and CSS changes using the Webpack CSS loader.

### Build the app for production (works well!)

To build the app without the development hot module reloading server:

```
npm run build [ -- ios || android]
```

i.e.:

```
npm run prepare -- ios
npm run prepare -- android
```

This will switch your `config.xml` file to production mode, build the app bundle to `/www` using Webpack, and run `cordova build` for you.

After that, the normal Cordova / PhoneGap commands can be used such as `phonegap serve`, or `cordova run ios`, etc.

# License

MIT. Copyright (c) 2016 Mark Rogov.

# TODO
1. SASS -> CSS
