
const express = require('express');
const cors = require('cors');
const quizRoutes = require('./routes/quizRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/', quizRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
