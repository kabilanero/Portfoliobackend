const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose =require('mongoose')

const mailRoutes = require('./routes/mailRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
mongoose.connect(process.env.MONGO_URI);

// Routea
app.use('/api', mailRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



