import { Router } from 'express';
import { healthcheckController } from '../controllers/healthcheck.js';

const router = Router();

/**
 * @openapi
 * /api/healthcheck:
 *   get:
 *     tags:
 *       - Healthcheck
 *     summary: Verifica se a API está rodando
 *     responses:
 *       200:
 *         description: API está funcionando
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: API is running
 */
router.get('/', healthcheckController);

export default router;