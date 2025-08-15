// Import the functions from the data model and use aliases to prevent naming conflicts.
import { 
    addExpense as model_addExpense, 
    getExpensesByDate as model_getExpensesByDate, 
    getTotalByDate as model_getTotalByDate, 
    getExpensesByRange as model_getExpensesByRange 
} from '../models/daybook.js';

// Controller function to handle adding a new expense.
export async function addExpense(req, res) {
    const { date, description, amount, category } = req.body;
    try {
        // Call the correctly aliased model function.
        const id = await model_addExpense({ date, description, amount, category });
        res.json({ success: true, id });
    } catch (error) {
        console.error('Error adding expense:', error);
        res.status(500).json({ success: false, message: 'Failed to add expense.' });
    }
}

// Controller function to handle getting expenses for a specific date.
export async function getExpensesByDate(req, res) {
    const { date } = req.query;
    try {
        // Call the correctly aliased model functions.
        const expenses = await model_getExpensesByDate(date);
        const total = await model_getTotalByDate(date);
        res.json({ expenses, total });
    } catch (error) {
        console.error('Error getting expenses by date:', error);
        res.status(500).json({ success: false, message: 'Failed to get expenses.' });
    }
}

// Controller function to handle getting expenses within a date range.
export async function getExpensesByRange(req, res) {
    const { start, end } = req.query;
    try {
        // Call the correctly aliased model function.
        const expenses = await model_getExpensesByRange(start, end);
        res.json({ expenses });
    } catch (error) {
        console.error('Error getting expenses by range:', error);
        res.status(500).json({ success: false, message: 'Failed to get expenses by range.' });
    }
}
