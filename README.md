# Java Project

This project is part of a full-stack project, involving a Java API, MySQL database running as a Docker Volume and ReactJS front-end. 

The API, which needs to be run seperately and concurrently, is available at <https://github.com/SalVN/java-project-back>.

## Getting Started

To run this project in the browser, the [back end](https://github.com/SalVN/java-project-back) should first be cloned and run.

To run the front end, the following steps should be taken:

### Prerequisites

This project requires nodejs and npm to be installed.

If nodejs is not installed on your machine, refer to the node documentation for instructions.

To confirm you have npm installed on your machine, run the following code:

```
npm -v
```

If you don't have npm installed on your machine, instructions for installing npm can be found at [https://www.npmjs.com/get-npm].

### Instructions

1. Install dependencies

After cloning the project from Github, use npm or yarn to install the dependencies on your machine.

```
yarn install
// or
npm install
```

2. Start the webpack dev server

This project uses a webpack dev server, which needs to be started to run the project.
```
yarn run dev
// or
npm run dev
```

3. Navigate to the correct page on your browser.

The project will run locally on 
```
localhost:9090/
```

## Functionality and Routes

The following routes can be used on the front-end to interact with the server

* *<localhost:9090/> or <localhost:9090/cameras>* 

displays a list of all the cameras in the database on screen

* *<localhost:9090/cameras/:cameraId>*

displays just the details of an individual camera

* *<localhost:9090/cameras/add>* 

 displays a form which, when submitted, will add a camera to the database

## Test Suite

A test suite has been used to test some aspects of the reducer (the actions and reducer files).
The tests run on [Mocha](https://mochajs.org/) and use the [Chai Assertion Library](http://chaijs.com/).

To run the tests, use either of the following commands in the terminal.
```
npm test
// or 
yarn test
```

### Uses

To run this project, the [back-end](https://github.com/SalVN/java-project-back) server needs to be running.

Whilst a full list of dependencies is available on the package.json, the main libraries used are:

PROJECT
[ReactJS](https://facebook.github.io/react/)
[React Router](https://reacttraining.com/react-router/)
[Redux](http://redux.js.org/) 
[Underscore](http://underscorejs.org/)
[Babel](https://babeljs.io/)
[Webpack.JS](https://webpack.js.org/)
[Axios](https://www.npmjs.com/package/axios)

TESTING
[Mocha](https://mochajs.org/)
[Chai Assertion Library](http://chaijs.com/)

### Authors

[Sally Newell](https://github.com/SalVN/)

### Acknowledgments

Completed as part of a project during the Java Course at [Northcoders](https://northcoders.com/).