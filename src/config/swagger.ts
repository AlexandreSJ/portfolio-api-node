import { Router } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const router = Router();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Portfolio API',
      version: '1.0.0',
      description: 'Documentação da API do portfólio',
    },
  },
  apis: ['src/routes/*.ts', 'src/docs/*.ts'],
};

const specs = swaggerJsdoc(options);
router.use('/', swaggerUi.serve, swaggerUi.setup(specs));

export default router;