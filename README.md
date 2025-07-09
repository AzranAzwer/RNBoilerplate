This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Install React Native project using the template

First, you will need to install **React Native** by using this boilerplate.

To install, replace app Name by removing MyNewApp and add custom App name and run the following command from the project location:

```sh
npx @react-native-community/cli init MyNewApp --version 0.78.2 --template my-react-native-boilerplate

```

## Step 2: Install node module

then, you will need to install **Node Module** and **Pod**.

To install Node, navigate to your custom app name directory and run the following command from the root of your React Native project based on above app name :

```sh
#navigate to the app directory
cd MyNewApp

# using Yarn
yarn install

# OR using npm
npm install
```

## Step 2: Start Metro

Now, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

Now that you have successfully run the app, let's make changes!

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run your React Native App. :partying_face:

# For Template updates and bug-fixes

To update and fix bug on template you should do the changes in code and Update the Version in package.json by below command.

for same version patch

### for 1.2.3 → 1.2.4

```sh
npm version patch --no-git-tag-version
```

for minor version update

### for 1.2.3 → 1.3.0

```sh
npm version minor --no-git-tag-version
```

for major version update

### for 1.2.3 → 2.0.0

```sh
npm version major --no-git-tag-version
```

## Or else you can change in package.json file manually without above commands

After changing the version, Test the Updated Template Locally.

in order to do archive that we have to create .tgz file **my-react-native-boilerplate-X.X.X.tgz** using below command

```sh
npm pack
```

now change the file location of below command and test.(Optional)

```sh
npx @react-native-community/cli init TestApp --version 0.78.2 --template file:/Users/__APP_NAME__/my-react-native-boilerplate-X.X.X.tgz

```

Once tested publish the new version to **NPM** by below command

```sh
npm publish
```

#### That’s it — the new version is live :tada:

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
