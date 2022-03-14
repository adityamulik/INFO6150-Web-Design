
const express = require("express"),
      app = express(),
      mongoose = require("mongoose"),
      bcrypt = require("bcrypt"),
      bodyParser = require("body-parser");

const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/assignment6", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  joined: { type: Date, default: Date.now },
});

const User = mongoose.model("user", userSchema);

app.get("/", (req, res) => {
  res.send("Welcome to Assignment 6 - INFO6150.");
});

// Create new user
app.post("/user/create", async (req, res) => {
  console.log(req.body);
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const innerResult = await User.create({
      username: req.body.email,
      password: hashedPassword
    });
    res.status(201).send(innerResult);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error Occurred!");
  }
});

// Get all users
app.get("/user/getAll", async (req, res) => {
  const result = User.find({}, (err, users) => {
    console.log(users);
  })
});

app.listen(8000, () => {
  console.log("Server started at port 8000");
});