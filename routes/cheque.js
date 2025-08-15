import { Router } from 'express';
const router = Router();
import { getAllCheques, markCleared } from '../controllers/cheque.js';

router.get('/all', getAllCheques);
router.post('/clear', markCleared);

export default router;