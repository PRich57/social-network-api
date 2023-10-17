# Social Network API

![404 Badge](https://img.shields.io/badge/No_License_Chosen-red)

## Description

The Social Network API is a RESTful API for managing users, thoughts, reactions, and friend connections in a social network. It allows you to perform various CRUD (Create, Read, Update, Delete) operations on users, thoughts, reactions, and friend connections.

To see the video demonstration click [HERE!](https://drive.google.com/file/d/1ilhYLn6KdlHxBVJS67vRIPq7JvzNE4w3/view?usp=sharing)

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)

## Installation

After cloning down this code, you will need to enter the command 'npm i' in your command line interface to install the necessary dependencies. 

To use this API you will need to have Insomnia or similar software to test the routes and create, read, update, and/or delete data from the database.

## Usage

#### Starting the Server

To start the server and sync the Mongoose models with the MongoDB database, run the following command:

      npm start

#### Testing API Endpoints

You can test the API endpoints using Insomnia or a similar tool.

#### GET Routes

To retrieve user data, make a GET request to `http://localhost:3001/api/users`.

To retrieve thought data, make a GET request to `http://localhost:3001/api/thoughts`.

Example: GET `http://localhost:3001/api/users` should return a formatted JSON response containing all user data.

#### POST Routes

To create a new user, make a POST request to `http://localhost:3001/api/users`.

To create a new thought, make a POST request to `http://localhost:3001/api/thoughts`.

To create a reaction to a thought, make a POST request to `http://localhost:3001/api/thoughts/{thoughtId}/reactions`, where `{thoughtId}` is the ID of an existing thought. 

Example: POST `http://localhost:3001/api/users` should allow you to create a new user by sending the required user data in the request body.

#### PUT Routes

To update user or thought data, make a PUT request to the appropriate route.

Example: PUT `http://localhost:3001/api/users/{userId}` should allow you to update user data by providing the updated data in the request body and the ID of an existing user in place of `{userId}`.

#### DELETE Routes

To delete a user, thought, or reaction, make a DELETE request to the appropriate route.
Example: DELETE `http://localhost:3001/api/users/{userId}` should delete the user with the specified ID.

Adding and Removing Friends
To add or remove friends to a user's friend list, make a POST or DELETE request to the `http://localhost:3001/api/users/{userId}/friends/{friendId}` route.

Example: POST `http://localhost:3001/api/users/{userId}/friends/{friendId}` should add the user with friendId to the friend list of the user with userId.


## License

N/A

## Contributing

I welcome contributions from the community to help improve and extend the Social Network API. To contribute please fork this repository, create your own branch, make your changes, test your changes, commit your changes, push your changes, create a pull request, and wait for review and discussion. If we agree on the changes after discussing them then they will be merged into the main project.

If you have questions or need assistance don't hesitate to contact me via GitHub!

GitHub: [PRich57](https://github.com/PRich57)
