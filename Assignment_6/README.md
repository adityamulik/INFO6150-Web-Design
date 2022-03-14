
# Assignment 6

- Author: Aditya Mulik
- NUID: 002127694
- Email: mulik.a@northeastern.edu

## Topic: Assignment 6 (Node, Express & MongoDB)


## API Endpoints:

1. POST - /user/create
Desc: To create a new user and store it to the database with salt/hashed password using brcypt and validations for password creation. Validation errors for password.
Parameters: a. email 
            b. password + confirm password 

2. POST - /user/edit
Desc: To update user's email or password on logging in. Validations for correct username or password.
Authenticate with credentials.
Parameters: a. new_email
            b. new_password + confirm new_password

3. DELETE - /user/delete
Authenticate with credentials.
Desc: Delete the user by using Delete request.

4. GET - /user/getAll
Desc: Get all the users email addresses and passwords (encrypted) from the database.
