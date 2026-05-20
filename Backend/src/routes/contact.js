import { Router } from 'express';
import { sendQuote, sendMessage } from '../controllers/contactController.js';

const router = Router();

router.post('/quote', sendQuote);
router.post('/message', sendMessage);

export default router;
