import express from 'express';
import dotenv from 'dotenv';
import healthcheckRoutes from './routes/healthcheck.js';
import swaggerRouter from './config/swagger.js';

dotenv.config();
const app = express();

app.use(express.json());

// Routes
app.use('/api/healthcheck', healthcheckRoutes);

// Swagger
app.use('/api-docs', swaggerRouter);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running at ${process.env.DOMAIN}:${process.env.PORT}`); // use .env file
});