# NoSQL Social Network API 
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](	https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Description
This is an API for a social network web app where users can share thoughts, react to friend's thoughts, and create a friend list. It is built using Express, MongoDB and Mongoose ODM. API routes uses standard CRUD operations to allow the functions typical of a social network web app:
* Create a user account, delete a user account, update user information, search all users, search individual user
* Add and remove friends
* Create a thought (post), delete a thought, search for all thoughts, search for individual thought
* Add and delete reactions to thoughts

## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#credits)
  

## Installation
💾 This project requires the following already installed to your machine:
* Node.js
* Insomnia Core (or similar application)
* MongoDB

1. `git clone` the repo to your local machine so that you have the project files
2. Run `npm install` to install the following npm package dependencies specified in `package.json`:
* `mongoose`
* `express`

## Usage
Click here to view the full video demo
1. Run `node index.js` in the terminal
2. Once the application connects, open Insomnia (or similar application) and ensure that it is connected to the correct port
3. In Insomnia, now you can run the CRUD operations in the app using GET, DEL, POST, and PUT routes at following api routes:

### Users
GET all Users:
1. Set the method to GET and localhost:3000/api/users
2. Click send. The results will populate in the "Preview" window

GET individual User by ID:
1. Set the method to GET and localhost:3000/api/users/[insert desired user ID] (eg. localhost:3001/api/users/63e9ae10c8ec2848496ae185)
2. Click send. 

PUT (Update) individual User:
1. Set the method to PUT and localhost:3000/api/users/ and add the ID for the desired user at the end 
2. In the Body, enter the details you want to change in proper JSON format as indicated in the app
3. Click send.

POST (create) individual User:
1. Set the method to POST and localhost:3000/api/users
2. In the body, enter the username and email of the new user in proper JSON format
3. Click send.

DELETE User:
1. Set the method to POST and localhost:3000/api/users/ and add the ID for the desired user at the end 
2. Click send.

### Friends
1. Set the method to GET and localhost:3000/api/users/ and add the ID for the desired user at the end (eg. localhost:3001/api/users/63e9ae10c8ec2848496ae185)
2. Click send. 
### Thoughts

### Reactions


## Features


## Credits


Grace Yao
https://github.com/gyao1487


## License

MIT license
https://spdx.org/licenses/MIT.html#:~:text=Text-,MIT%20License,-Copyright%20(c)%20%3Cyear

# Contributing





