# VStore

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) ![David](https://img.shields.io/david/dev/taniarascia/webpack-boilerplate)

I design and develop a fully-function website using Vanilla JavaScript, HTML5 and CSS3 in frontend and Node and MongoDB in the backend.
Also deploy on cloud server Heroku and connect it to payment gateways PayPal.
The website was created by me only a part of my learning process. 

## Screenshot
![5fb995e96ce46873717265](https://user-images.githubusercontent.com/45083295/99889059-c38d8a80-2c49-11eb-85b3-8f71dcede6c7.gif)

## Demo Website
- 👉 Heroku : [https://vstoreapp.herokuapp.com](https://vstoreapp.herokuapp.com)

## Tehnologies
> Project is created with:
- Web Design using HTML5, CSS3, Sass, Flexbox, Grid System and Response Design.
- Frontend Development by Pure JavaScript including ES6 Syntax, Rendering System, Libraries for drawing chart and etc.
- Backend Development using Node and MongoDB consist of ExpressJS, JWT Authentication, Mongoose object data modeling.

## Run Locally
### 1. Clone repo
```
$ git clone git@github.com:AtanasVihrogonov/VStore.git
$ cd VStore
```
### 2. Setup MongoDB
 - Download and Install it from [mongodb.com](https://www.mongodb.com/try/download/community)

### 3. Create .env file
- Create .env file in project folder
- Enter these lines to that:

```
MONGODB_URL=mongodb://localhost/vstore
JWT_SECRET=somethingsecret
PAYPAL_CLIENT_ID=db
```

### 4. Run Backend
```
$ npm install
$ npm run build
$ npm start
```

### 5. Run Frontend
```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

### 6. Create Admin User
- Run this on chrome: http://localhost:5000/api/users/createadmin
- Note admin email and password

### 7. Admin Login
- Run http://localhost:8080/#/signin
- Enter admin email and password and click signin
- Click Dashboard Link on Header Menu
- Click Products on left sidebar
- Click Create Product Button
- Enter Product Information
- Go to home page (http://localhost:8080) and test Ecommerce Website

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



