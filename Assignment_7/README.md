
# Assignment 7

- Author: Aditya Mulik
- NUID: 002127694
- Email: mulik.a@northeastern.edu

## Topic: Assignment 7 (Node, Express & MongoDB) + ReactJS
Assignment 6 based on user authentication, CRUD operations involving storing password to MongoDB using encryption.
A frontend UI based 

## API Endpoints:

1. POST - /user/login \
Desc: To login using email and password, password will be validated with hashed password. \ 
Validation errors for password. \
Parameters: a. email 
            b. password

2. POST - /user/create \
Desc: To create a new user and store it to the database with salt/hashed password using brcypt and validations for password creation. Validation errors for password. \
Parameters: a. email 
            b. password + confirm password 

3. POST - /user/edit \
Desc: To update user's email or password on logging in. Validations for correct username or password. \
Parameters: a. new_email
            b. new_password + confirm new_password

4. DELETE - /user/delete \
Desc: Delete the user by using Delete request.

5. GET - /user/getAll \
Desc: Get all the users email addresses and passwords (encrypted) from the database.

## Technology & Softwares:

1. MongoDB
2. Express
3. NodeJS
4. ReactJS

Commonly used packages:
1. bcrypt
2. mongoose
3. express
4. nodemon

## Installation:
Clone the repository on your local machine

Running the backend api server 
1. Change directory to api (cd api/)
2. Install the packages by running the command *npm install* (at the root of the directory)
3. Run the app by running the command *npm start*

Running the frontend application
1. Change directory to frontend (cd frontend/)
2. Install the packages by running the command *npm install* (at the root of the directory)
3. Run the app by running the command *npm start*

* Use postman to test the API endpoints
* Install MongoDB community edition server and create a local database
