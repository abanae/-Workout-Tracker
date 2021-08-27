const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const api = require("./routes/api");


const PORT = process.env.PORT || 3001;

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/workout', {
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