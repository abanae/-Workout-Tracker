const express = require("express");
const mongoose = require("mongoose");
const api = require("./routes/api");
// const { Todo, User } = require("./models");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/workoutTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(api);
app.use(require("./routes/html.js"));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});