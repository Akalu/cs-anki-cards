# About CS Anki Cards

The aim of this project is to create a simple deck of anki cards on different topics in Computer Science. Currently 18 topics are covered, ranging from CS fundamentals till REST architecture and OOD. 

Also this is a good chance to show up opportunities proposed by Angular framework in terms of intuitive UI and usability.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

You can see the app in action on Heroku:

[https://cs-anki-cards.herokuapp.com/about](https://cs-anki-cards.herokuapp.com/about)


This project is intended to deploy to production, for development purposes change the start script reference in package.json to ng start:

```
"scripts": {
    "start": "ng start",
}
```

## Development

Here are all initial steps to generate the skeleton of Angular project with Material Design styling:

1) IDEA -> new project -> static web -> angular cli

2) ng add @angular/material

3) use arrows to choose theme

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. So the final command will look like

```
ng build --prod (run in command line when directory is projectFolder)
```

## Production Build for Heroku

It will be necessary to make some changes into configuration in order to successfully deploy project to Heroku.

1) Create postinstall script in package.json: 
Under "scripts", add a "heroku-postinstall" command like so:

```
"heroku-postbuild": "ng build --prod"
```

This tells Heroku to build the application using Ahead Of Time (AOT) compiler and make it production-ready. This will create a dist folder where all html and javascript converted version of our app will be launched from.

2) Add Node and npm engines (first run node -v and npm -v to get the correct version):

```
"engines": {
    "node": "12.14.1",
    "npm": "6.13.4"
}
```

3) Add typescript configuration to dependencies:
Copy "typescript": "~2.3.3" from devDependencies to dependencies to also inform Heroku what typescript version to use.

4) Install Enhanced Resolve 3.3.0:
Run the command 

```
npm install enhanced-resolve@3.3.0 --save-dev
```

5) Change start command:
In package.json, change the "start" command to node server.js so it becomes:

```
"start": "node server.js"
```


## Deployment

Deployment to Heroku is quite straightforward. I will describe here the deployment variant with the help of Heroku CLI.

1) install heroku-cli

2) clone project https://github.com/Akalu/cs-anki-cards

3) login to your heroku account

```
heroku login
```

4) add heroku endpoint:

```
heroku git:remote -a cs-anki-cards
```

5) initiate Heroku's CI/CD pipeline using the command:

```
$ git push heroku master
```

After successful build the console should show the following output:

```
remote: -----> Launching...
remote:        Released v3
remote:        https://cs-anki-cards.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/cs-anki-cards.git
 * [new branch]      master -> master
```




