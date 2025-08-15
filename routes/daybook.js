import { Router } from 'express';
const router = Router();
import { addExpense, getExpensesByDate, getExpensesByRange } from '../controllers/daybook.js';

router.post('/add', addExpense);
router.get('/by-date', getExpensesByDate);
router.get('/by-range', getExpensesByRange);

export default router;