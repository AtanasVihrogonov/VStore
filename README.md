# VStore

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) ![David](https://img.shields.io/david/dev/taniarascia/webpack-boilerplate)

I design and develop a fully-function website using Vanilla JavaScript, HTML5 and CSS3 in frontend and Node and MongoDB in the backend.

Also deploy on cloud server Heroku and connect it to payment gateways PayPal.

The website was created by me only a part of my learning process. 

## Screenshot
![Screenshot](https://user-images.githubusercontent.com/45083295/99466157-cf203f00-2933-11eb-9723-7eda1b889765.png)

## Tehnologies
> Project is created with:

- Web Design using HTML5, CSS3, Sass, Flexbox, Grid System and Response Design.

- Frontend Development by Pure JavaScript including ES6 Syntax, Rendering System, Libraries for drawing chart and etc.

- Backend Development using Node and MongoDB consist of ExpressJS, JWT Authentication, Mongoose object data modeling.

## Installation

```
git clone git@github.com:AtanasVihrogonov/VStore.git

root: $ npm i

/frontend: $ npm i
```

## Usage
> To log as an admin visit: https://vstoreapp.herokuapp.com/api/users/createadmin

### Development server

```sh
$ npm run start
```

### Production build
Compile and build 

```sh
to create dist/
root: $ npm run build

merge src/ to ES5
/frontend: $ npm run build

/frontend: $ npm run compile:sass
```

### Serve
To serve in the browser  - Runs webpack-dev-server

```sh
$ npm run serve
```

### Build

## Features

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)

## Dependencies

### Webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for Webpack.
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for Webpack.

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript.
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel.

### Loaders

- [`node-sass`](https://github.com/sass/node-sass) - Node Sass.

## Author

- [Atanas Vihrogonov](https://avihrogonov.co.uk)

## License

This project is open source and available under the [MIT License](LICENSE).



