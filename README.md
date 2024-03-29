# NoSQL Social Network API 
Welcome to my NoSQL Social Network API! This API serves as the backbone for a feature-rich social network web app, empowering users to connect, share thoughts, and build meaningful friendships. Built with Node.js, Express.js, and MongoDB, it offers a seamless experience for developers seeking to create dynamic and engaging social networking platforms.

![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](	https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Description
This is an API for a social network web app where users can share thoughts, react to friend's thoughts, and create a friend list. It is built using Express, MongoDB and Mongoose ODM. API routes use standard CRUD operations to allow the functions typical of a social network web app.


## Table of Contents 
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)
  
## Features

![Screenshot](/assets/screenshot.PNG)

With this API, developers can implement a wide range of functionalities, including:

- User Management: Easily create, update, and delete user accounts, and search for individual or all users.
- Friendship Management: Enable users to add or remove friends, fostering genuine connections.
- Thought-Sharing: Allow users to create and delete thoughts, and search for individual or all thoughts.
- Reaction Expressions: Let users add or remove reactions to thoughts, making the platform more interactive.
- Friend and Reaction Count: Display friend count for users and reaction count for thoughts to provide valuable insights.

## Installation
💾 This project requires the following already installed to your machine:
* [Node.js](https://nodejs.org/en/)
* [Insomnia Core](https://insomnia.rest/download) (or similar application)
* [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/)

1. `git clone` the repo to your local machine so that you have the project files
2. Run `npm install` to install the following npm package dependencies specified in `package.json`:
* `mongoose`
* `express`

## Usage
[Click here to view the full video demo!](https://watch.screencastify.com/v/m8rRj33rKLEYhFpUTpUP)
1. Run `node index.js` in the terminal
2. Once the application connects, open Insomnia (or similar application) and ensure that it is connected to the correct port
3. In Insomnia, now you can run the CRUD operations in the app using GET, DEL, POST, and PUT routes at following api routes:

### Users
GET all users:
1. Set the method to GET and localhost:3000/api/users
2. Click send. The results will populate in the "Preview" window

GET individual user by ID:
1. Set the method to GET and localhost:3000/api/users/[insert target user ID] (eg. localhost:3001/api/users/63e9ae10c8ec2848496ae185)
2. Click send. 

Update (PUT) individual user:
1. Set the method to PUT and localhost:3000/api/users/[insert target user ID]
2. In the Body, enter the details you want to change in proper JSON format as indicated in the app
3. Click send.

Create (POST) individual user:
1. Set the method to POST and localhost:3000/api/users
2. In the body, enter the username and email of the new user in proper JSON format
3. Click send.

DELETE user:
1. Set the method to DEL and localhost:3000/api/users/[insert target user ID]
2. Click send.

### Friends
Add (POST) friend:
1. Set the method to GET and localhost:3000/api/users/[insert target user ID]/friends/[insert friend user ID]
2. Click send. 

Remove (DELETE) friend:
1. Set the method to GET and localhost:3000/api/users/[insert target user ID]/friends/[insert friend user ID]
2. Click send. 

### Thoughts
Create (POST) thought:
1. Set the method to GET and localhost:3000/api/thoughts
2. In the body, enter the thought content and username of the posting user in proper JSON format
3. Click send. 

GET all thoughts 
1. Set the method to GET and localhost:3000/api/thoughts
2. Click send. 

GET individual thought:
1. Set the method to GET and localhost:3000/api/thoughts/[insert target thought ID]
2. Click send. 

DELETE thought:
1. Set the method to DELETE and localhost:3000/api/thoughts/[insert target thought ID]
2. Click send. 

### Reactions
Add (POST) reaction:
1. Set the method to POST and localhost:3000/api/thoughts/[insert target thought ID]/reactions/
2. Click send. 

Remove (DELETE) reaction:
1. Set the method to DEL and localhost:3000/api/users/[insert target thought ID]/reactions/[insert reactionID]
2. Click send. 

## Credits

Built by Grace Yao

## License

[MIT License](https://spdx.org/licenses/MIT.html#:~:text=Text-,MIT%20License,-Copyright%20(c)%20%3Cyear)

---
## Questions

Thank you for exploring the NoSQL Social Network API! We hope this powerful tool will inspire you to create captivating social networking experiences. Feel free to contribute, report issues, or reach out with questions. Happy coding!

* GitHub: [@gyao1487](https://github.com/gyao1487)
* Email: gee.yao@gmail.com
* [LinkedIn](https://www.linkedin.com/in/grace-yao-51304b139/) 






