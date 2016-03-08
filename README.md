![logo](https://github.com/theotow/gitmonitor-ios/raw/master/github/120x120.png "logo")

# gitmonitor-ios

## purpose

The purpose of this app is to remind you to push your code before you shut your macbook and go home, it may be that other people depend on it or your harddrive dies on the way home...

![flow](https://github.com/theotow/gitmonitor-ios/raw/master/github/flow.png "flow")

## how to install

1. Setup your env https://facebook.github.io/react-native/docs/getting-started.html#content
2. Adjust the path to your [gitmonitor-server](https://github.com/theotow/gitmonitor-server) in ```src/reducer/Settings.js```

3. Npm install all
```
npm install
```

4. Open gitmonitor-ios/ios/Gitmonitor/AppDelegate.m
5. Adjust localhost to your ip address if your testing on device ```jsCodeLocation = ...```

Open Xcode project in ios/ folder

## how to build it for your iphone

1. Open gitmonitor-ios/ios/Gitmonitor/AppDelegate.m
2. Uncomment ```jsCodeLocation = [[NSBundle mainBundle] ...```
3. run ```react-native bundle --dev false --entry-file ./index.ios.js --bundle-output ./ios/main.jsbundle --platform ios``` in the gitmonitor-ios folder
4. The JS bundle will be built for dev or prod depending on your app's scheme (Debug = development build with warnings, Release = minified prod build with perf optimizations). To change the scheme navigate to Product > Scheme > Edit Scheme... in xcode and change Build Configuration between Debug and Release.

## uses

* custom fonts
* embedded images
* qr code scanner
* async storage
* react-redux
* ... -> package.json

## preview

![img 1](https://github.com/theotow/gitmonitor-ios/raw/master/github/IMG_1743.PNG "img1")
![img 2](https://github.com/theotow/gitmonitor-ios/raw/master/github/IMG_1742.PNG "img2")


## depends on

* [gitmonitor-client](https://github.com/theotow/gitmonitor-client)
* [gitmonitor-server](https://github.com/theotow/gitmonitor-server)
* Xcode
* node

Tested on Mac OSX 10.10.5 & node 4.2.2 & Xcode 7.2.1

## open todos

* [ ] add settings to make endpoint changeable
* [ ] cleanup / simplify

## how to contribute

feel free to send me PRs for the open todos, or come up with other suggestions and improvements

## licence

MIT
