import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'It works' });
});

app.listen(process.env.PORT, (err) => {
  if(err) console.error(err);
  console.log(`Server now running on: ${process.env.DOMAIN}:${process.env.PORT}`);
});