import { Router } from 'express';
const router = Router();
import { addEntry, getEntriesByCategory, getWeeklySummary, getMonthlySummary } from '../controllers/ledger.js';

router.post('/add', addEntry);
router.get('/by-category', getEntriesByCategory);
router.get('/weekly-summary', getWeeklySummary);
router.get('/monthly-summary', getMonthlySummary);

export default router;