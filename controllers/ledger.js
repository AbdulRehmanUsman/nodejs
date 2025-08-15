import {
    addEntry as model_addEntry,
    getEntriesByCategory as model_getEntriesByCategory,
    getWeeklySummary as model_getWeeklySummary,
    getMonthlySummary as model_getMonthlySummary
} from '../models/ledger.js';

export async function addEntry(req, res) {
    const { category, name, type, amount, description, date, cheque_number } = req.body;
    try {
        const id = await model_addEntry({ category, name, type, amount, description, date, cheque_number });
        res.json({ success: true, id });
    } catch (error) {
        console.error('Error adding entry:', error);
        res.status(500).json({ success: false, message: 'Failed to add ledger entry.' });
    }
}

export async function getEntriesByCategory(req, res) {
    const { category } = req.query;
    try {
        const entries = await model_getEntriesByCategory(category);
        res.json({ entries });
    } catch (error) {
        console.error('Error getting entries by category:', error);
        res.status(500).json({ success: false, message: 'Failed to get ledger entries.' });
    }
}

export async function getWeeklySummary(req, res) {
    const { category, weekstart, weekend } = req.query;
    try {
        const summary = await model_getWeeklySummary(category, weekstart, weekend);
        res.json({ summary });
    } catch (error) {
        console.error('Error getting weekly summary:', error);
        res.status(500).json({ success: false, message: 'Failed to get weekly summary.' });
    }
}

export async function getMonthlySummary(req, res) {
    const { category, monthstart, monthend } = req.query;
    try {
        const summary = await model_getMonthlySummary(category, monthstart, monthend);
        res.json({ summary });
    } catch (error) {
        console.error('Error getting monthly summary:', error);
        res.status(500).json({ success: false, message: 'Failed to get monthly summary.' });
    }
}
