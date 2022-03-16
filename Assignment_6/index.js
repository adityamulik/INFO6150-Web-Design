const express = require("express"),
      app = express(),
      mongoose = require("mongoose"),
      bcrypt = require("bcrypt"),
      bodyParser = require("body-parser");

const saltRounds = 10;

let counter = 1;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/assignment6", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  user_type: String,
  joined: { type: Date, default: Date.now },
});

const User = mongoose.model("user", userSchema);

// Home Page
app.get("/", (req, res) => {
  res.send("Welcome to Assignment 6 - INFO6150.");
});

// Create new user
app.post("/user/create", async (req, res) => {

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const innerResult = await User.create({
      _id: counter,
      email: req.body.email,
      password: hashedPassword,
      user_type: req.body.user_type
    });
    res.status(201).send(innerResult);
    counter += 1;
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error Occurred!");
  }
});

// Update user details

app.post("/user/edit", async (req, res) => {

  const id = req.query.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${id}. User was not found!`
        });
      } else res.send({ message: "User details were updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
});

// Get all users
app.get("/user/getAll", async (req, res) => {

  User.find({}, function (err, users) {
      users.forEach(user => delete user.password);
      const newResult = users.map(item => {
        return {
          id: item._id,
          email: item.email,
          user_type: item.user_type
        }
      })
      res.send(newResult);
  });
  
});

// Delete user

app.delete("/user/delete", async (req, res) => {

  const id = req.query.id;

  User.findByIdAndDelete(id)
    .then(item => {
      if (!item) {
        res.status(404).send({
          message: `Cannot delete User with id=${id}. User not found!`
        });
      } else {
        res.send({
          message: `User with id ${id} was deleted successfully!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
  
});

// Server config block
app.listen(8000, () => {
  console.log("Server started at port 8000");
});