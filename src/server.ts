import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'It works' });
});

app.listen(port, () => {
  console.log(`Server now running on: http://localhost:${port}`);
});