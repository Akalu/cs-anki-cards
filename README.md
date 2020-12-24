# CS Anki Cards

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


### Building a web-pack

#### Production Build

The production build should be used to compile the app for **deployment**.
It will do it's best to keep the target files as small as possible.

```sh
$ gulp build
```

#### Development Build

A development build performs similar tasks as a production build, but makes debugging a lot easier.

```sh
$ gulp dev-build
```

### Deployment

This app supports deployment on Heroku:

```sh
$ git push heroku master
```

Just make sure to set the correct Node and npm environment variables:

```sh
NODE_ENV=production
NPM_CONFIG_PRODUCTION=false
```


