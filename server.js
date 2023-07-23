const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movie-routes');

const PORT = 3000;
const URL = "mongodb+srv://Enzo:Combo425@cluster0.tnftxqy.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(express.json());

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});

app.use(movieRoutes);