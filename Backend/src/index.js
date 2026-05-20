import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import productsRouter from './routes/products.js';
import contactRouter from './routes/contact.js';
import { logger } from './middleware/logger.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3001;

// ── Middlewares ──────────────────────────────────────────
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));
app.use(express.json());
app.use(logger);

// ── Health check ─────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Hipermat API running 🏗️' });
});

// ── Routes ────────────────────────────────────────────────
app.use('/api/products', productsRouter);
app.use('/api/contact', contactRouter);

// ── Error handling ────────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`\x1b[34m🏗️  Hipermat API corriendo en http://localhost:${PORT}\x1b[0m`);
});
