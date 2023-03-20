<div style="display:flex;">
  <img src="./public/img/quick-card-logo.svg" width="30px">
  <h1 style="font-size: 30px; font-weight: 900; margin-left: 10px; padding-top: 25px; border: 0">QuickCard</h1>
</div>

<hr>

# About the project
QuickCard is an application that allows you to generate a QR Image, which we call a QuickCard, containing your basic professional information. The purpose of the QuickCard is to make it easy for others to access your LinkedIn and GitHub profiles by scanning the QR code with their mobile device.

## Features
Choose your mobile device type
Enter your name, LinkedIn URL, and GitHub URL Generate a QuickCard with a QR Image Share your QuickCard with others to easily provide your professional information QuickCard profile page displays your name, a brief history, and buttons for your LinkedIn and GitHub profiles

## Getting Started
To get started, visit the /generate page and follow the simple steps to create your personalized QuickCard. The generated QR code can be stored on your mobile device for easy access and sharing.

When someone scans your QuickCard QR code, they will be redirected to your QuickCard profile page. This page displays your name, a short history, and buttons to view your LinkedIn and GitHub profiles.

## Design
The website is designed with a clean and simple aesthetic, providing a user-friendly experience. The UX/UI is well-structured, making it easy for users to navigate and generate their QuickCard.
<br><br>
<hr>

## How to start the project:

### First get the backend project here:
https://github.com/mauriciomueller/quickcard-backend and follow README.md instructions.<br><br>

### Start containers:
```
$ docker-compose up -d
```
This command starts the Docker containers defined in the docker-compose.yml file in detached mode (running in the background).<br><br>


### Install dependencies
```
$ npm install
```
This command installs the required dependencies for a Node.js project by reading the package.json file and installing the listed packages into the node_modules folder.<br><br>


### Open localhost in your browser:
```
$ open http://localhost:5190/
```
Note: In order to http://localhost:5190/ to work you need to setup the backend first.<br><br>

<hr>

## Other commands

### Stop containers
```
$ docker-compose stop
```
This command stops the running Docker containers defined in the docker-compose.yml file.<br><br>

### Run tests
```
$ npm run test
```
This command runs the test suite for your application using jest.<br><br>

### Run tests with coverage
```
$ npm run coverage
```
This command runs the test suite and generates a code coverage report, showing how much of your code is covered by tests.


### Run lint to check
```
$ npm run lint
```
This command checks your code for style and syntax issues using ESLint.