require('dotenv').config({ path: './src/api/.env' });

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const cookbookRouter = require('./routes/cookbook');
const cors = require('cors');

mongoose.set('strictQuery', false);

mongoose.connect(process.env.DATABASE_URL, {
  family: 4,
});

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(cors());
app.use(express.json());
app.use('/cookbook', cookbookRouter);

app.listen(3001, () => console.log('Server Started'));
