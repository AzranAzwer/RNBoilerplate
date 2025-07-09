# Getting Started

You should do the changes in code and Update the Version in package.json by below command.

### for same version patch

eg: 1.2.3 → 1.2.4

```sh
npm version patch --no-git-tag-version
```

### for minor version update

eg: 1.2.3 → 1.3.0

```sh
npm version minor --no-git-tag-version
```

### for major version update

eg: for 1.2.3 → 2.0.0

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
